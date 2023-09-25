# eslint-config-react-native-matipl01

![release workflow](https://github.com/MatiPl01/explint-plugin-react-native-matipl01/actions/workflows/release/badge.svg)
[![Node version](https://img.shields.io/node/v/eslint-config-react-native-matipl01.svg?style=flat)](https://nodejs.org/download/)

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
