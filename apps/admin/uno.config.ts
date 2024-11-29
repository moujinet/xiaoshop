import presetWebFonts from '@unocss/preset-web-fonts'
import { presetArco } from '@xiaoshop/unocss-preset'
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
      // Background
      'bg-body': 'bg-$bg-body',
      'bg-layout': 'bg-$bg-layout',
      'bg-header': 'bg-$bg-header',
      'bg-sidebar': 'bg-$bg-sidebar',
      'bg-toolbar': 'bg-$bg-toolbar',
      'bg-activity-indicator': 'bg-$bg-activity-indicator',
      'bg-activity-panel': 'bg-$bg-activity-panel',

      // Text
      'text-body': 'text-$text-body',
      'text-heading': 'text-$text-heading',
      'text-secondary': 'text-$text-secondary',
      'text-comment': 'text-$text-comment',

      // Border
      'b-sidebar': 'b-$sidebar',
      'b-activity': 'b-$activity',
      'b-activity-indicator': 'b-$activity-indicator',
      'b-toolbar': 'b-$toolbar',

      // Padding
      'p-content': 'p-$content',

      // Width
      'w-sidebar': 'w-$sidebar',
      'w-sidebar-collapsed': 'w-$sidebar-collapsed',
      'w-activity-indicator': 'w-$activity-indicator',
      'w-activity-panel': 'w-$activity-panel',

      // Height
      'h-header': 'h-$header',
      'h-toolbar': 'h-$toolbar',

      // utils
      'flex-center': 'items-center justify-center',
      'flex-v-center': 'items-center',
      'flex-h-center': 'justify-center',
      'flex-between': 'justify-between',
    },
  ],
  presets: [
    presetUno(),
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
