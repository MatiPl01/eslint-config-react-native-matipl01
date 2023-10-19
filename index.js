module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:perfectionist/recommended-natural",
    "plugin:markdown/recommended",
  ],
  plugins: [
    "react",
    "react-native",
    "react-hooks",
    "@typescript-eslint",
    "import",
    "unused-imports",
    "simple-import-sort",
    "no-relative-import-paths",
    "perfectionist",
    "prettier",
  ],
  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    projectRoot: ".",
    project: "./tsconfig.json",
    ecmaFeatures: {},
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
  rules: {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/naming-convention": [
      2,
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreVoid: true,
      },
    ],
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    camelcase: [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
        properties: "always",
        allow: [],
      },
    ],
    "comma-dangle": ["off"],
    "consistent-this": ["error", "self"],
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
        allowPattern: "",
      },
    ],
    "eol-last": ["error", "always"],
    eqeqeq: ["error"],
    "getter-return": [
      "error",
      {
        allowImplicit: false,
      },
    ],
    "import/no-unused-modules": [
      "warn",
      {
        unusedExports: true,
      },
    ],
    "lines-around-comment": ["error"],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNewExceptionPattern: "^Gesture\\.",
      },
    ],
    "new-parens": ["off"],
    "no-async-promise-executor": ["error"],
    "no-await-in-loop": ["error"],
    "no-catch-shadow": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error"],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-constant-condition": [
      "error",
      {
        checkLoops: true,
      },
    ],
    "no-control-regex": ["error"],
    "no-delete-var": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-else-if": ["error"],
    "no-duplicate-case": ["error"],
    "no-else-return": [
      "error",
      {
        allowElseIf: true,
      },
    ],
    "no-empty": [
      "error",
      {
        allowEmptyCatch: false,
      },
    ],
    "no-empty-character-class": ["error"],
    "no-empty-function": [
      "error",
      {
        allow: ["constructors"],
      },
    ],
    "no-eq-null": ["error"],
    "no-ex-assign": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-boolean-cast": [
      "error",
      {
        enforceForLogicalOperands: false,
      },
    ],
    "no-fallthrough": [
      "error",
      {
        commentPattern: "",
      },
    ],
    "no-func-assign": ["error"],
    "no-implied-eval": ["error"],
    "no-import-assign": ["error"],
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": ["error"],
    "no-iterator": ["error"],
    "no-label-var": ["error"],
    "no-labels": ["error"],
    "no-lone-blocks": ["error"],
    "no-lonely-if": ["error"],
    "no-loop-func": ["error"],
    "no-new": ["error"],
    "no-new-object": ["error"],
    "no-new-wrappers": ["error"],
    "no-obj-calls": ["error"],
    "no-octal": ["error"],
    "no-octal-escape": ["error"],
    "no-promise-executor-return": ["error"],
    "no-proto": ["error"],
    "no-redeclare": [
      "error",
      {
        builtinGlobals: true,
      },
    ],
    "no-regex-spaces": ["error"],
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      {
        allowSameFolder: true,
        rootDir: "src",
        prefix: "@",
      },
    ],
    "no-return-assign": ["error", "except-parens"],
    "no-script-url": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-setter-return": ["error"],
    "no-shadow": "off",
    "no-shadow-restricted-names": ["error"],
    "no-sparse-arrays": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-undef-init": ["error"],
    "no-underscore-dangle": ["error"],
    "no-unexpected-multiline": ["error"],
    "no-unreachable-loop": [
      "error",
      {
        ignore: ["DoWhileStatement"],
      },
    ],
    "no-unsafe-finally": ["error"],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-unused-vars": "off",
    "no-useless-escape": ["error"],
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "no-with": ["error"],
    "nonblock-statement-body-position": ["error"],
    "perfectionist/sort-classes": [
      "error",
      {
        type: "natural",
        order: "asc",
        groups: [
          "index-signature",
          "static-property",
          "private-property",
          "property",
          "constructor",
          ["get-method", "set-method"],
          "static-method",
          "private-method",
          "static-private-method",
          "method",
          "unknown",
        ],
      },
    ],
    "perfectionist/sort-exports": "off",
    "perfectionist/sort-imports": "off",
    "perfectionist/sort-jsx-props": "off",
    "perfectionist/sort-named-exports": "off",
    "perfectionist/sort-named-imports": "off",
    "prettier/prettier": [
      "error",
      {
        bracketSameLine: true,
        singleQuote: true,
        printWidth: 100,
        semi: false,
      },
    ],
    radix: ["error", "as-needed"],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-native/no-unused-styles": "error",
    "react-native/sort-styles": "error",
    "react/display-name": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        multiline: "last",
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "require-atomic-updates": ["error"],
    "require-await": ["error"],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-vars": [
      "error",
      {
        ignoreCase: false,
      },
    ],
    strict: ["error", "never"],
    "unused-imports/no-unused-imports": "error",
    "use-isnan": ["error"],
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: false,
      },
    ],
  },
  env: {
    es2020: true,
  },
};
