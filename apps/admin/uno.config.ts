import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { extractorArbitraryVariants } from '@unocss/extractor-arbitrary-variants'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import presetRemToPx from '@unocss/preset-rem-to-px'

import { presetUiKit } from './src/preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetUiKit(),
    presetIcons(),
    presetRemToPx(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        brand: 'Chillax',
      },
      processors: createLocalFontProcessor({
        cacheDir: 'node_modules/.cache/unocss/fonts',
        fontAssetsDir: 'public/assets/fonts',
        fontServeBaseUrl: '/assets/fonts',
      }),
    }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

  extractors: [
    extractorArbitraryVariants(),
  ],

  content: {
    pipeline: {
      include: [
        /\.(vue|[jt]sx|html|md)($|\?)/,
        'src/themes/**/*.{ts,js,mjs,cjs,mts,cts}',
        'src/**/ui.config.{ts,js,mjs,cjs,mts,cts}',
      ],
    },
  },
})
