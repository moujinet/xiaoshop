import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { extractorArbitraryVariants } from '@unocss/extractor-arbitrary-variants'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { presetAnimations } from 'unocss-preset-animations'
import presetRemToPx from '@unocss/preset-rem-to-px'

import { presetUiKit } from './preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetUiKit(),
    presetIcons(),
    presetRemToPx(),
    presetAttributify(),
    presetAnimations(),
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
        'src/**/ui.config.{ts,js,mjs,cjs,mts,cts}',
      ],
    },
  },
})
