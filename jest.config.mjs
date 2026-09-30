import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
   testEnvironment: "jsdom",
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
   moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
   },
   testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
   collectCoverageFrom: [
      "src/components/**/*.{ts,tsx}",
      "src/lib/**/*.{ts,tsx}",
      "!src/**/*.test.{ts,tsx}",
   ],
   coverageReporters: ["text", "lcov", "json-summary"],
   clearMocks: true,
   restoreMocks: true,
};

export default createJestConfig(config);
