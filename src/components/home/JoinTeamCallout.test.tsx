import { render, screen } from "@/test-utils/render";
import { JoinTeamRibbon } from "./JoinTeamCallout";

describe("JoinTeamRibbon", () => {
   it("links to the careers page", () => {
      render(<JoinTeamRibbon />);

      expect(screen.getByRole("link", { name: /now hiring/i })).toHaveAttribute(
         "href",
         "/careers"
      );
   });
});
