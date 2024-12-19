import type { Preset } from 'unocss'
import type { Theme } from './types'

import { rules } from './rules'
import { colors } from './theme'
import { variants } from './variants'
import { shortcuts } from './shortcuts'
import { preflights } from './preflights'

export interface PresetUiKitOptions {
  /**
   * @default 'ui'
   */
  prefix?: string
}

export function presetUiKit(options: PresetUiKitOptions = {}): Preset {
  const {
    prefix = 'ui',
  } = options

  return {
    name: '@xiaoshop/admin/uikit',
    rules,
    shortcuts,
    preflights: preflights(prefix),
    variants: variants(prefix),
    extendTheme(theme: Theme) {
      theme.colors = colors(prefix)
    },
  }
}
