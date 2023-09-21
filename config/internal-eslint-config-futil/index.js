/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ['node_modules/', 'dist'],
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 'detect',
    },
  },
  extends: [
    'turbo',
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: [
    'react',
    'prettier',
    'unicorn',
    'simple-import-sort',
    'import',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.d.ts', '*.config.ts', '*.configs.js'],
      rules: {
        /** mainly used to adhere to nextjs module export standards */
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:mdx/recommended'],
      rules: { 'unicorn/filename-case': ['off'] },
    },
    {
      files: ['*.yml', '*.yaml'],
      extends: ['plugin:yml/recommended'],
    },
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:vitest/recommended'],
    },
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/no-duplicates': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': 'allow-with-description',
        'ts-check': false,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'no-console': 'warn',
    'react/no-unescaped-entities': 'warn',
    'prettier/prettier': 'error',
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-fragments': 0,
    'react/no-unused-prop-types': 0,
    'import/no-default-export': 'error',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // nodejs builtins
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // side effects
          ['^\\u0000'],
          // react and related packages
          ['^react', '^@?\\w'],
          // @em workspace/alias imports
          ['^(@futil)(/.*|$)'],
          // EXAMPLE relative path alias imports
          // ['^(@|@<LIB_NAME>|@<LIB_2_name>)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports; Puts `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Puts same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-key': 'off',
  },
};
