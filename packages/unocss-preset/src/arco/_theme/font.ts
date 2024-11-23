import type { Theme } from '@unocss/preset-mini'

export const fontSize: Theme['fontSize'] = {
  'display': ['48px', '1'],
  'display-lg': ['56px', '1'],
  'display-sm': ['36px', '1'],
  'title': ['20px', '1.5rem'],
  'title-lg': ['24px', '1.5rem'],
  'title-sm': ['16px', '1.5rem'],
  'body': ['14px', '1.5rem'],
  'body-md': ['13px', '1'],
  'body-sm': ['12px', '1'],
  'caption': ['12px', '1'],
} satisfies Theme['fontSize']
