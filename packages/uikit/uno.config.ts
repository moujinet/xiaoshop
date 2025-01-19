import { presetUiKit } from '@xiaoshop/uikit-preset'
import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  envMode: 'build',

  cli: {
    entry: {
      patterns: ['src/**/*.ts', 'src/**/*.vue', '!**/*.d.ts'],
      outFile: './uikit.css',
    },
  },

  presets: [
    presetUno(),
    presetIcons(),
    presetUiKit(),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

  content: {
    pipeline: {
      include: [
        /\.(vue|[jt]sx|html|md)($|\?)/,
        'src/props/**/*.{ts,js,mjs,cjs,mts,cts}',
        'src/**/*.ui.{ts,js,mjs,cjs,mts,cts}',
      ],
    },
  },
})
