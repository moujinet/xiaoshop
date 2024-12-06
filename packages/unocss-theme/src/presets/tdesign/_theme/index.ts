import type { Theme } from '~/types'

import { colors } from './colors'
import { fontSize } from './font'
import { borderRadius, boxShadow, breakpoints, easing, spacing, verticalBreakpoints } from './misc'
import { containers } from './size'

export const theme = {
  containers,
  colors,
  fontSize,
  spacing,
  borderRadius,
  breakpoints,
  verticalBreakpoints,
  easing,
  boxShadow,
} satisfies Theme
