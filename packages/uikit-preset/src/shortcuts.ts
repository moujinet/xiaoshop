import type { Shortcuts } from './types'

// Shortcuts
export const shortcuts = {
  // Flex
  'flex-center': 'items-center justify-center',
  'flex-x-center': 'justify-center',
  'flex-y-center': 'items-center',
  'flex-between': 'justify-between',

  // Position
  'absolute-x-center': 'absolute left-1/2 -translate-x-1/2',
  'absolute-y-center': 'absolute top-1/2 -translate-y-1/2',
  'absolute-center': 'absolute-x-center absolute-y-center',

  // Cursor
  'cursor-button': 'cursor-default',
  'cursor-checkbox': 'cursor-default',
  'cursor-disabled': 'cursor-not-allowed',
  'cursor-link': 'cursor-pointer',
  'cursor-menu': 'cursor-default',
  'cursor-radio': 'cursor-default',
  'cursor-switch': 'cursor-default',

} satisfies Shortcuts
