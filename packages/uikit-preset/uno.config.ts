import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { extractorArbitraryVariants } from '@unocss/extractor-arbitrary-variants'
import { presetUiKit } from './src'

export default defineConfig({
  presets: [
    presetUno(),
    presetUiKit(),
    presetIcons(),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

  extractors: [
    extractorArbitraryVariants(),
  ],
})
