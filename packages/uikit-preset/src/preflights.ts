// Preflights
import type { Preflights } from './types'
import type { ThemeConfig } from './themes'
import type { AccentColorName, GrayColorName } from './colors'

import { preflightThemes } from './themes/preflights'
import { preflightBase, preflightRadixColors, preflightShadows } from './colors/preflights'

export function preflights(
  prefix: string,
  accentColors: AccentColorName[],
  grayColors: GrayColorName[],
  themes: ThemeConfig[],
  lightMode: string,
  darkMode: string,
): Preflights {
  return [
    // Base
    preflightBase(
      lightMode,
      darkMode,
    ),

    // Colors Css Variables
    ...preflightRadixColors(
      accentColors,
      grayColors,
      lightMode,
      darkMode,
    ),

    // Themes
    ...preflightThemes(
      prefix,
      themes,
      lightMode,
      darkMode,
    ),

    // Shadows
    preflightShadows(
      lightMode,
      darkMode,
    ),
  ]
}
