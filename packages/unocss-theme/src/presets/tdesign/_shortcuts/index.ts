import type { Shortcuts } from '~/types'

import background from './background'
import text from './text'

export const shortcuts = {
  ...background,
  ...text,
} satisfies Shortcuts
