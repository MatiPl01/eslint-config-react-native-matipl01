# eslint-config-react-native-matipl01

> [!IMPORTANT]  
> Some plugins used in this config haven't been adjusted to work
> with ESLint v9 yet. Stick with ESLint v8 if you want all rules to
> be enabled.

[![npm version](https://badge.fury.io/js/eslint-config-react-native-matipl01.svg)](https://badge.fury.io/js/eslint-config-react-native-matipl01)

ESLint and TypeScript configuration used in my React Native projects.

## Prerequisites

To use this config in a project, you should install `eslint` and `typescript` libraries yourself in your project.

## Installation

- yarn

```sh
yarn add -D eslint-config-react-native-matipl01
```

- npm

```sh
npm install eslint-config-react-native-matipl01 --save-dev
```

## Usage

### ESLint (v9 and newer)

Extend this config in your eslint configuration file (more information about eslint configuration file formats is in [docs](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats)):

```js
// eslint.config.js
import eslintConfig from 'eslint-config-react-native-matipl01'

export default eslintConfig
```

You can add your custom configs in the following way:

```js
// eslint.config.js
import eslintConfig from 'eslint-config-react-native-matipl01'

export default [
  ...eslintConfig,
  // <custom config>
]
```

### ESLint (before v9)

The old eslint API will be no longer supported. Install old version of the package
to use it with older ESLint versions (the latest supporting ESLint 8 is 2.1.0)

> [!NOTE]  
> If you use a custom `prettier` config, eslint will show suggestions based
on your `prettier` configuration stored in the `.pretterrc` file.

### TypeScript

Extend the TypeScript config in your `tsconfig.json` file:

```json
{
  "extends": "eslint-config-react-native-matipl01/tsconfig.base"
}
```
