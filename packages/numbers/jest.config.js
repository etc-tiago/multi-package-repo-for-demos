const base = require('../../jest.config');
module.exports = {
  ...base,
  collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**', '!**/build/**', '!**/coverage/**', '!**/tests/**'],
};
