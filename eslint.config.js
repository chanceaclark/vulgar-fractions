import { flatConfigs } from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier/recommended';

// @typescript-eslint v8 does not yet support TypeScript 7; re-add once it does.
// Type correctness is still enforced via `tsc --emitDeclarationOnly` in the build.
// Tracking: https://github.com/typescript-eslint/typescript-eslint/issues/10940
export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  flatConfigs.recommended,
  prettier,
  {
    rules: {
      'no-console': 'warn',
      'newline-before-return': 'error',
      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
      'import-x/named': 'off',
      'import-x/default': 'off',
      'import-x/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
          groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        },
      ],
    },
  },
];
