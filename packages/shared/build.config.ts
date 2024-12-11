import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    { builder: 'mkdist', input: './src', pattern: ['**/*.ts'], format: 'esm', loaders: ['js'], ext: 'mjs' },
    { builder: 'mkdist', input: './src', pattern: ['**/*.ts', '!types/*.ts'], format: 'cjs', loaders: ['js'], ext: 'cjs' },
  ],
  declaration: true,
  clean: false,
})
