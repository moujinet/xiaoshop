import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',

    stylistic: {
      indent: 2,
      quotes: 'single',
    },

    typescript: true,
    jsonc: false,
    yaml: false,
    vue: true,

    ignores: [
      'dist',
      'snapshots*',
      'node_modules',
      'docs/**',
    ],
  },
  {
    files: [
      'apps/**/*.ts',
      'service/nestjs/src/**/*.ts',
      'service/nestjs/test/**/*.ts',
      'packages/cli/**/*.ts',
    ],
    rules: {
      'no-console': 'off',
      'node/no-path-concat': 'off',
      'node/prefer-global/process': 'off',
      'ts/consistent-type-imports': 'off',
      'test/prefer-lowercase-title': 'off',
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
  {
    files: [
      'apps/**/*.ts',
    ],
    rules: {
      'perfectionist/sort-exports': 'off',
      'perfectionist/sort-imports': 'off',
    },
  },
)
