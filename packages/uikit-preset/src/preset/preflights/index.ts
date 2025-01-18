import type { AccentColorName, GrayColorName, Preflights, ThemeConfig } from '../../types'

import { preflightBase } from './base'
import { preflightColors } from './color'
import { preflightNeutral } from './neutral'
import { preflightShadows } from './shadow'
import { preflightThemes } from './theme'

export function preflights(
  defaultGrayColor: GrayColorName,
  accentColors: AccentColorName[],
  grayColors: GrayColorName[],
  themes: ThemeConfig[],
  lightMode: string,
  darkMode: string,
): Preflights {
  return [
    ...preflightBase(darkMode),
    ...preflightColors(accentColors, grayColors, lightMode, darkMode),
    ...preflightNeutral(defaultGrayColor, lightMode, darkMode),
    ...preflightShadows(lightMode, darkMode),
    ...preflightThemes(themes, lightMode, darkMode),
  ]
}
