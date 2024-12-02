import type { Theme } from '~/types'

import { colors } from './colors'
import { fontSize } from './font'
import { borderRadius } from './misc'
import { size } from './size'
import { easing } from './transition'

export const theme = {
  width: size,
  maxWidth: size,
  minWidth: size,
  height: size,
  maxHeight: size,
  minHeight: size,
  containers: size,
  colors,
  easing,
  borderRadius,
  fontSize,
} satisfies Theme
