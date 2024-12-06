import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',

    typescript: true,
    vue: true,

    ignores: [
      'dist',
      'snapshots*',
      'node_modules',
      'docs/**',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'node/no-path-concat': 'off',
      'node/prefer-global/process': 'off',
      'ts/consistent-type-imports': 'off',
      'test/prefer-lowercase-title': 'off',
      'perfectionist/sort-exports': 'off',
      'perfectionist/sort-imports': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    files: [
      'service/nestjs/**/*.ts',
      'packages/cli/**/*.ts',
      'packages/shared/src/**/*.ts',
    ],
    rules: {
      'perfectionist/sort-exports': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          internalPattern: ['@/**', '~/**', '~~/**'],
          groups: [
            ['type'],
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
        },
      ],
    },
  },
)
