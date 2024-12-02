import presetWebFonts from '@unocss/preset-web-fonts'
import { presetTheme } from '@xiaoshop/unocss-theme'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { colors } from './src/constants/colors'

export default defineConfig({
  shortcuts: [
    {
      // Text
      'text-title': 'c-$color-text-1',
      'text-body': 'c-$color-text-2',
      'text-info': 'c-$color-text-3',
      'text-disable': 'c-$color-text-4',

      // Utils
      'flex-center': 'items-center justify-center',
      'flex-v-center': 'items-center',
      'flex-h-center': 'justify-center',
      'flex-between': 'justify-between',
    },
  ],
  presets: [
    presetUno(),
    presetTheme({
      library: 'arco',
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
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    ...colors.map(color => `c-${color}`),
    ...colors.map(color => `bg-${color}`),
  ],
})
