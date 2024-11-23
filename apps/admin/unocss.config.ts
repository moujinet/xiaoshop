import { presetArco } from '@xiaoshop/unocss-preset'
import presetWebFonts from '@unocss/preset-web-fonts'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      // utils
      'flex-center': 'items-center justify-center',
      'flex-v-center': 'items-center',
      'flex-h-center': 'justify-center',
      'flex-between': 'justify-between',
    },
  ],
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetArco(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        logo: 'Chillax',
      },
      processors: createLocalFontProcessor({
        cacheDir: 'node_modules/.cache/unocss/fonts',
        fontAssetsDir: 'public/assets/fonts',
        fontServeBaseUrl: '/assets/fonts',
      }),
    }),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
