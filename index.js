import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from 'eslint-plugin-import';
import markdown from 'eslint-plugin-markdown';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const coreRules = {
    camelcase: ['error', {
        allow: [],
        ignoreDestructuring: false,
        ignoreGlobals: false,
        ignoreImports: false,
        properties: 'always',
    }],
    'comma-dangle': 'off',
    'consistent-this': ['error', 'self'],
    'dot-notation': ['error', { allowKeywords: true, allowPattern: '' }],
    'eol-last': ['error', 'always'],
    eqeqeq: ['error'],
    'getter-return': ['error', { allowImplicit: false }],
    'lines-around-comment': ['error', {
        afterBlockComment: false,
        afterLineComment: false,
        allowArrayStart: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        beforeBlockComment: false,
        beforeLineComment: false,
    }],
    'new-cap': ['error', {
        capIsNewExceptionPattern: '^Gesture\\.',
        newIsCap: true,
    }],
    'new-parens': 'off',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-catch-shadow': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-constant-condition': ['error', { checkLoops: true }],
    'no-control-regex': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': ['error', { allowElseIf: true }],
    'no-empty': ['error', { allowEmptyCatch: false }],
    'no-empty-character-class': 'error',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-eq-null': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: false }],
    'no-fallthrough': ['error', { commentPattern: '' }],
    'no-func-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-new': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'off',                       // handled by @typescript-eslint/no-shadow
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable-loop': ['error', { ignore: ['DoWhileStatement'] }],
    'no-unsafe-finally': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-unused-vars': 'off',                  // replaced by unused-imports
    'no-useless-escape': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'no-with': 'error',
    'nonblock-statement-body-position': 'error',
    radix: ['error', 'as-needed'],
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'sort-vars': ['error', { ignoreCase: false }],
    strict: ['error', 'never'],
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: false }],
};

const tsRules = {
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/member-ordering': ['error', {
        default: ['signature', 'method', 'constructor', 'field'],
    }],
    '@typescript-eslint/naming-convention': ['error', {
        format: ['PascalCase'],
        selector: 'enumMember',
    }],
    '@typescript-eslint/no-floating-promises': ['error', {
        ignoreIIFE: true,
        ignoreVoid: true,
    }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': ['error', {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
    }],
};

const importRules = {
    'import/no-unused-modules': ['warn', { unusedExports: true }],
    'no-relative-import-paths/no-relative-import-paths': ['warn', {
        allowSameFolder: true,
        prefix: '@',
        rootDir: 'src',
    }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'unused-imports/no-unused-imports': 'error',
};

const reactRules = {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/sort-styles': 'error',
    'react/display-name': 'error',

    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-sort-props': ['error', {
        callbacksLast: true,
        ignoreCase: true,
        multiline: 'last',
        noSortAlphabetically: false,
        shorthandFirst: false,
        shorthandLast: true,
    }],

    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
};

const perfectionistRules = {
    'perfectionist/sort-classes': ['error', {
        groups: [
            'index-signature',
            'static-property',
            'private-property',
            'property',
            'constructor',
            ['get-method', 'set-method'],
            'static-method',
            'private-method',
            'static-private-method',
            'method',
            'unknown',
        ],
        order: 'asc',
        type: 'natural',
    }],
    'perfectionist/sort-enums': 'off',
    'perfectionist/sort-exports': 'off',
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-jsx-props': 'off',
    'perfectionist/sort-named-exports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'perfectionist/sort-object-types': 'off',
};

const prettierRules = {
    'prettier/prettier': 'error',
};

export default tseslint.config(
    /* Presets in the desired order */
    js.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    reactHooks.configs['recommended-latest'],
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    perfectionist.configs['recommended-natural'],
    markdown.configs.recommended,
    eslintPluginPrettierRecommended,
    eslintConfigPrettier,

    /* Additional plugins not included in the presets and other settings */
    {
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.es2025,
                ...globals.node,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'no-relative-import-paths': noRelativeImportPaths,
            'react-native': fixupPluginRules(reactNative),
            'simple-import-sort': simpleImportSort,
            'unused-imports': unusedImports,
        },
    },

    /* Logically grouped rule overrides */
    { name: 'core', rules: coreRules },
    { name: 'typescript', rules: tsRules },
    { name: 'imports', rules: importRules },
    { name: 'react', rules: reactRules },
    { name: 'perfectionist', rules: perfectionistRules },
    { name: 'prettier', rules: prettierRules },

    /* Markdown override */
    {
        files: ['**/*.md'],
        processor: 'markdown/markdown',
    },
);
