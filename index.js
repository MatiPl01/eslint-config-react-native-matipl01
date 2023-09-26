module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:perfectionist/recommended-natural",
    "plugin:markdown/recommended",
  ],
  plugins: [
    "react",
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
      // Enable the Markdown processor for all .md files.
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
    "lines-around-comment": ["error"],
    "new-cap": [
      "error",
      { newIsCap: true, capIsNewExceptionPattern: "^Gesture\\." },
    ],
    "new-parens": ["off"],
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
    "no-empty": [
      "error",
      {
        allowEmptyCatch: false,
      },
    ],
    "no-else-return": [
      "error",
      {
        allowElseIf: true,
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
    "no-proto": ["error"],
    "no-redeclare": [
      "error",
      {
        builtinGlobals: true,
      },
    ],
    "no-regex-spaces": ["error"],
    "no-return-assign": ["error", "except-parens"],
    "no-script-url": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-shadow-restricted-names": ["error"],
    "no-sparse-arrays": ["error"],
    "no-undef-init": ["error"],
    "no-underscore-dangle": ["error"],
    "no-unexpected-multiline": ["error"],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-useless-escape": ["error"],
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "no-with": ["error"],
    "nonblock-statement-body-position": ["error"],
    radix: ["error", "as-needed"],
    "require-await": ["error"],
    "sort-vars": [
      "error",
      {
        ignoreCase: false,
      },
    ],
    "use-isnan": ["error"],
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: false,
      },
    ],
    strict: ["error", "never"],
    "getter-return": [
      "error",
      {
        allowImplicit: false,
      },
    ],
    "no-async-promise-executor": ["error"],
    "no-await-in-loop": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-else-if": ["error"],
    "no-duplicate-case": ["error"],
    "no-import-assign": ["error"],
    "no-promise-executor-return": ["error"],
    "no-setter-return": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unreachable-loop": [
      "error",
      {
        ignore: ["DoWhileStatement"],
      },
    ],
    "no-unsafe-finally": ["error"],
    "require-atomic-updates": ["error"],
    "no-catch-shadow": ["error"],
    "no-delete-var": ["error"],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreVoid: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "off",
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "import/no-unused-modules": ["warn", { unusedExports: true }],
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: true, rootDir: "src", prefix: "@" },
    ],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/prop-types": "off",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "perfectionist/sort-imports": "off",
    "perfectionist/sort-exports": "off",
    "perfectionist/sort-named-imports": "off",
    "perfectionist/sort-named-exports": "off",
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
    "perfectionist/sort-jsx-props": "off",
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
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
  },
  env: {
    es2020: true,
  },
};
