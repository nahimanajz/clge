const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(config);
