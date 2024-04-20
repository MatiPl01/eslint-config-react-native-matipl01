import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';

export default [
  perfectionistNatural,
  eslintConfigPrettier,
  {
    ignores: ['.pnp.cjs', '.pnp.loader.mjs', '.yarn', 'CHANGELOG.md']
  }
];
