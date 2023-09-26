# eslint-config-react-native-matipl01

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

### ESLint

Extend this config in your eslint configuration file (more information about eslint configuration file formats is in [docs](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats)):

```json
{
  "extends": "react-native-matipl01"
}
```

If yo use a custom `prettier` config, eslint will show suggestions based
on your `prettier` configuration.

### TypeScript

Extend the TypeScript config in your `tsconfig.json` file:

```json
{
  "extends": "eslint-config-react-native-matipl01/tsconfig.base"
}
```
