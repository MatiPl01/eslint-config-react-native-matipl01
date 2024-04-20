import { ESLint } from 'eslint';

describe('eslint', () => {
  it('returns correct configuration', async () => {
    const eslint = new ESLint({
      overrideConfigFile: './index.js'
    });

    expect(await eslint.calculateConfigForFile('test.tsx')).toMatchSnapshot();
  });
});
