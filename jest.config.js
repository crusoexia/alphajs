/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  coverageDirectory: 'dist/coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: false,
      },
    ],
  },
};
