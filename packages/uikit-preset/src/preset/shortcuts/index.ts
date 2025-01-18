import type { Shortcuts } from '../../types'

import { absolute } from './position'
import { cursor } from './cursor'
import { flex } from './flex'

export const shortcuts = {
  ...absolute,
  ...cursor,
  ...flex,
} satisfies Shortcuts
