import type { Theme } from '@unocss/preset-mini'

import { colors } from './colors'
import { fontSize } from './font'
import { borderRadius } from './misc'
import { containers, height, width } from './size'

export const theme = {
  width,
  height,
  maxWidth: width,
  maxHeight: height,
  minWidth: width,
  minHeight: height,
  containers,
  colors,
  fontSize,
  borderRadius,
} satisfies Theme
