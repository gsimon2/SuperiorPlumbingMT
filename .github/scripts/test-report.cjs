// Builds a Markdown report from Jest's JSON output and coverage summary, writes it
// to the job summary, and keeps a single up-to-date comment on the pull request.
// Invoked from actions/github-script, which provides github, context and core.

const fs = require("fs");
const path = require("path");

const MARKER = "<!-- ci-unit-test-report -->";
// GitHub rejects comments over 65,536 characters.
const MAX_BODY = 60000;
const MAX_FAILURE_CHARS = 1500;

const readJson = (file) => {
   try {
      return JSON.parse(fs.readFileSync(file, "utf8"));
   } catch {
      return undefined;
   }
};

const stripAnsi = (text) => text.replace(/\u001b\[[0-9;]*m/g, "");

const truncate = (text, max) =>
   text.length > max ? `${text.slice(0, max)}\n… (truncated)` : text;

const relative = (file) => path.relative(process.cwd(), file).replace(/\\/g, "/");

const cleanMessage = (message) =>
   stripAnsi(message)
      .split("\n")
      .filter((line) => !/^\s*at .*(node_modules|node:internal|<anonymous>)/.test(line))
      .map((line) => line.split(process.cwd() + path.sep).join(""))
      .join("\n")
      .trim();

const failureSection = (results) => {
   const failures = [];
   for (const suite of results.testResults) {
      const failedAssertions = suite.assertionResults.filter(
         (assertion) => assertion.status === "failed"
      );
      if (failedAssertions.length === 0 && suite.status === "failed") {
         failures.push({
            title: relative(suite.name),
            message: suite.message,
         });
      }
      for (const assertion of failedAssertions) {
         failures.push({
            title: `${relative(suite.name)} › ${assertion.fullName}`,
            message: assertion.failureMessages.join("\n"),
         });
      }
   }

   return failures.map(
      ({ title, message }) =>
         `<details><summary>❌ ${title}</summary>\n\n\`\`\`\n${truncate(
            cleanMessage(message),
            MAX_FAILURE_CHARS
         )}\n\`\`\`\n</details>`
   );
};

const buildReport = ({ results, coverage, runUrl, sha }) => {
   const lines = [MARKER];

   if (!results) {
      lines.push(
         "## ⚠️ Unit tests did not report results",
         "",
         `Jest produced no results, so the run likely failed before tests started. See the [workflow run](${runUrl}).`
      );
      return lines.join("\n");
   }

   const passed = results.success;
   const seconds = (
      (Math.max(...results.testResults.map((suite) => suite.endTime)) -
         results.startTime) /
      1000
   ).toFixed(1);

   lines.push(
      `## ${passed ? "✅ Unit tests passed" : "❌ Unit tests failed"}`,
      "",
      "| Tests | Passed | Failed | Skipped | Test files | Duration |",
      "| --- | --- | --- | --- | --- | --- |",
      `| ${results.numTotalTests} | ${results.numPassedTests} | ${results.numFailedTests} | ${
         results.numPendingTests + results.numTodoTests
      } | ${results.numPassedTestSuites}/${results.numTotalTestSuites} | ${seconds}s |`
   );

   const failures = failureSection(results);
   if (failures.length > 0) {
      lines.push("", "### Failures", "", ...failures);
   }

   if (coverage?.total) {
      const { total } = coverage;
      const pct = (key) => `${total[key].pct}%`;
      lines.push(
         "",
         "### Coverage",
         "",
         "| Statements | Branches | Functions | Lines |",
         "| --- | --- | --- | --- |",
         `| ${pct("statements")} | ${pct("branches")} | ${pct("functions")} | ${pct("lines")} |`
      );
   }

   lines.push(
      "",
      `<sub>Commit ${sha.slice(0, 7)} · [Workflow run](${runUrl})</sub>`
   );

   return truncate(lines.join("\n"), MAX_BODY);
};

module.exports = async ({ github, context, core }) => {
   const results = readJson("jest-results.json");
   const coverage = readJson("coverage/coverage-summary.json");
   const runUrl = `${context.serverUrl}/${context.repo.owner}/${context.repo.repo}/actions/runs/${context.runId}`;
   const pullRequest = context.payload.pull_request;
   const sha = pullRequest?.head.sha ?? context.sha;

   const body = buildReport({ results, coverage, runUrl, sha });
   await core.summary.addRaw(body).write();

   if (!pullRequest) {
      return;
   }
   // Pull requests from forks get a read-only token and can't comment.
   if (pullRequest.head.repo?.full_name !== pullRequest.base.repo.full_name) {
      core.info("Skipping PR comment for a pull request from a fork.");
      return;
   }

   const { owner, repo } = context.repo;
   const comments = await github.paginate(github.rest.issues.listComments, {
      owner,
      repo,
      issue_number: pullRequest.number,
      per_page: 100,
   });
   const existing = comments.find(
      (comment) =>
         comment.user?.type === "Bot" && comment.body?.includes(MARKER)
   );

   if (existing) {
      await github.rest.issues.updateComment({
         owner,
         repo,
         comment_id: existing.id,
         body,
      });
   } else {
      await github.rest.issues.createComment({
         owner,
         repo,
         issue_number: pullRequest.number,
         body,
      });
   }
};
