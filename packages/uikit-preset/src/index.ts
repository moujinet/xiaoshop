import type { ThemeConfig } from './types/theme'
import type { AccentColorName, GrayColorName } from './types/color'

import { definePreset } from '@unocss/core'

import { theme } from './preset/theme'
import { shortcuts } from './preset/shortcuts'
import { preflights } from './preset/preflights'
import { ACCENT_COLOR_NAMES, GRAY_COLOR_NAMES } from './constants'
import { defaultTheme } from './themes'

export interface PresetUiKitOptions {
  /**
   * @default 'slate'
   */
  defaultGrayColor?: GrayColorName
  /**
   * @default ':root'
   */
  lightMode?: string
  /**
   * @default '.dark'
   */
  darkMode?: string
  /**
   * @default ACCENT_COLOR_NAMES
   */
  accentColors?: AccentColorName[]
  /**
   * @default GRAY_COLOR_NAMES
   */
  grayColors?: GrayColorName[]
  /**
   * @default []
   */
  themes?: ThemeConfig[]
}

export const presetUiKit = definePreset<PresetUiKitOptions>((options: PresetUiKitOptions = {}) => {
  const {
    defaultGrayColor = 'slate',
    accentColors = ACCENT_COLOR_NAMES,
    grayColors = GRAY_COLOR_NAMES,
    themes = [],
    lightMode = ':root',
    darkMode = '.dark',
  } = options

  return {
    name: '@xiaoshop/unocss-preset-uikit',
    theme: theme(defaultGrayColor),
    shortcuts,
    preflights: [
      ...preflights(
        defaultGrayColor,
        accentColors,
        grayColors,
        [
          defaultTheme,
          ...themes,
        ],
        lightMode,
        darkMode,
      ),
    ],
  }
})
