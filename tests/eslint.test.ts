import { ESLint } from 'eslint';


describe('eslint-config', () => {
  const eslint = new ESLint({
    overrideConfigFile: 'index.js',
  });

  it('still merges to the same rule set', async () => {
    // 3⃣  Await the ESLint promise *inside* expect
    const cfg = await eslint.calculateConfigForFile('dummy.tsx');
    expect(cfg).toMatchSnapshot();
  });
});