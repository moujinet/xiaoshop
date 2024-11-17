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
      'input': 'bg-$theme-bg-input hover:bg-$theme-bg-input-hover focus:bg-$theme-bg-input-focus',

      // links
      'text-link': 'cursor-pointer text-$theme-comment hover:c-$theme-text active:c-$theme-title transition-color',

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
