const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'json'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  testPathIgnorePatterns: ['/node_modules/', '/tests/fixture', '/tests/config', '/build/', '/dist/', '/coverage/'],
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.json', diagnostics: false } },
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/packages/**/*.{js,jsx,ts,tsx}',
    'src/web/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/coverage/**',
    '!**/tests/**',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary'],
};
