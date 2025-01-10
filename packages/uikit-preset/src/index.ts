import type { AccentColorName, GrayColorName } from './colors/types'
import type { ThemeConfig } from './themes/types'

import { definePreset } from '@unocss/core'
import { preflights } from './preflights'
import { shortcuts } from './shortcuts'

import { colors } from './colors'
import { themeColors } from './themes'
import { DEFAULT_ACCENT_COLORS, DEFAULT_GRAY_COLORS } from './colors/constants'
import { animation, borderRadius, boxShadow, breakpoints, easing, fontFamily, fontSize, spacing, verticalBreakpoints } from './theme'

import defaultThemes from './themes/defaults'

export interface PresetUiKitOptions {
  /**
   * @default 'ui'
   */
  prefix?: string
  /**
   * @default ':root, .light'
   */
  lightMode?: string
  /**
   * @default '.dark'
   */
  darkMode?: string
  /**
   * @default DEFAULT_ACCENT_COLORS
   */
  accentColors?: AccentColorName[]
  /**
   * @default DEFAULT_GRAY_COLORS
   */
  grayColors?: GrayColorName[]
  /**
   * @default []
   */
  themes?: ThemeConfig[]
}

export const presetUiKit = definePreset<PresetUiKitOptions>((options: PresetUiKitOptions = {}) => {
  const {
    prefix = 'ui',
    lightMode = ':root, .light',
    darkMode = '.dark',
    accentColors = DEFAULT_ACCENT_COLORS,
    grayColors = DEFAULT_GRAY_COLORS,
    themes = [],
  } = options

  return {
    name: '@xiaoshop/unocss-preset-uikit',
    theme: {
      breakpoints,
      verticalBreakpoints,
      fontFamily,
      fontSize,
      spacing,
      borderRadius,
      boxShadow,
      easing,
      animation,
      colors: {
        ...colors(
          accentColors,
          grayColors,
        ),
        ...themeColors(prefix),
      },
    },
    shortcuts,
    preflights: [
      ...preflights(
        prefix,
        accentColors,
        grayColors,
        [
          ...themes,
          ...defaultThemes,
        ],
        lightMode,
        darkMode,
      ),
    ],
  }
})
