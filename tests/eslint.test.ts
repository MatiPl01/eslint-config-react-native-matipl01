import { ESLint } from 'eslint';

describe('eslint', () => {
  it('returns correct configuration', async () => {
    const eslint = new ESLint({
      overrideConfigFile: './example/eslint.config.js'
    });

    expect(await eslint.calculateConfigForFile('test.tsx')).toMatchSnapshot();
  });
});
