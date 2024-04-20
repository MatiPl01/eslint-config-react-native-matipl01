import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';

export default [
  perfectionistNatural,
  eslintConfigPrettier,
  {
    ignores: ['.yarn', '.pnp.*', 'CHANGELOG.md']
  }
];
