import type { GrayColorName, Theme } from '../../types'

import { ACCENT_COLOR_NAMES, GRAY_COLOR_NAMES } from '../../constants'

import { easing } from './transition'
import { animation } from './animation'
import { colors, themeColors } from './colors'
import { borderRadius, boxShadow, breakpoints, spacing, verticalBreakpoints } from './misc'
import { fontFamily, fontSize } from './font'

export function theme(defaultGrayColor: GrayColorName): Theme {
  return {
    animation,
    borderRadius,
    boxShadow,
    breakpoints,
    easing,
    fontSize,
    fontFamily,
    spacing,
    verticalBreakpoints,
    colors: {
      ...themeColors(),
      ...colors(
        [...ACCENT_COLOR_NAMES, ...GRAY_COLOR_NAMES],
        defaultGrayColor,
      ),
    },
  }
}
