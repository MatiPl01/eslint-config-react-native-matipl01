'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const eslint_1 = require('eslint');
describe('eslint', () => {
  it('returns correct configuration', async () => {
    const eslint = new eslint_1.ESLint({
      overrideConfigFile: './index.js'
    });
    expect(await eslint.lintText('')).toBeTruthy();
  });
});
