import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  type UserConfig,
} from 'unocss'
import defu from 'defu'

import { presetUiKit } from './preset'

export function extendUnocssConfig(userConfig: UserConfig): UserConfig {
  return defu({}, userConfig, {
    presets: [
      presetUno(),
      presetUiKit(),
      presetIcons({
        collections: {
          brand: FileSystemIconLoader('./assets/brand'),
          empty: FileSystemIconLoader('./assets/empty'),
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
    content: {
      pipeline: {
        include: [
          /\.(vue|[jt]sx|html)($|\?)/,
          '**/ui.config.{ts,js,mjs,cjs,mts,cts}',
        ],
      },
    },
  })
}
