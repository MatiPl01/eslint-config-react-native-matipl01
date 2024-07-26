import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';

export default [
  perfectionist.configs['recommended-natural'],
  eslintConfigPrettier,
  {
    ignores: ['.yarn', '.pnp.*', 'CHANGELOG.md']
  }
];
