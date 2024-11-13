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
  theme: {
    colors: {
      primary: 'rgba(var(--rgb-primary), <alpha-value>)',
    },
  },
  shortcuts: [
    {
      // effects
      'clickable': 'cursor-pointer rounded-sm c-$color-text-1 hover:bg-$color-fill-1 active:bg-$color-fill-2 transition-all',

      // utils
      'flex-center': 'items-center justify-center',
      'flex-v-center': 'items-center',
      'flex-h-center': 'justify-center',
      'flex-between': 'justify-between',
      'absolute-center': 'left-50% top-50% translate-x--1/2 translate-y--1/2',
    },
  ],
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
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
