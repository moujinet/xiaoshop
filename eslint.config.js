import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',

    stylistic: {
      indent: 2,
      quotes: 'single',
    },

    markdown: true,
    typescript: true,
    jsonc: false,
    yaml: false,
    vue: true,
    unocss: true,

    ignores: [
      'dist',
      'snapshots*',
      'node_modules',
    ],
  },
  {
    files: [
      '**/*.ts',
    ],
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
)
