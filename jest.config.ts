export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(css|scss)$": "jest-transform-stub",
  },
  rootDir: "src",
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
