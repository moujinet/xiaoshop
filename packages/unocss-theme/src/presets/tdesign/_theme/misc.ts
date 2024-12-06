import type { Theme } from '~/types'

export const borderRadius = {
  DEFAULT: '3px',
  sm: '2px',
  md: '6px',
  lg: '9px',
  xl: '12px',
  round: '999px',
  circle: '50%',
} satisfies Theme['borderRadius']

export const spacing = {
  DEFAULT: '8px',
  none: '0',
  s: '4px',
  m: '6px',
  l: '6px',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
  9: '72px',
  10: '80px',
} satisfies Theme['spacing']

export const breakpoints = {
  'xs': '320px',
  'sm': '768px',
  'md': '992px',
  'lg': '1200px',
  'xl': '1400px',
  '2xl': '1880px',
} satisfies Theme['breakpoints']

export const verticalBreakpoints = { ...breakpoints } satisfies Theme['breakpoints']

export const easing = {
  'DEFAULT': 'cubic-bezier(.38, 0, .24, 1)',
  'linear': 'linear',
  'easing': 'cubic-bezier(.38, 0, .24, 1)',
  'ease-out': 'cubic-bezier(0, 0, .15, 1)',
  'ease-in': 'cubic-bezier(.82, 0, 1, .9)',
} satisfies Theme['easing']

export const boxShadow = {
  '1': 'var(--td-shadow-1)',
  '2': 'var(--td-shadow-2)',
  '3': 'var(--td-shadow-3)',
  'inset-t': 'var(--td-shadow-inset-top)',
  'inset-r': 'var(--td-shadow-inset-right)',
  'inset-b': 'var(--td-shadow-inset-bottom)',
  'inset-l': 'var(--td-shadow-inset-left)',
  'table': 'var(--td-table-shadow-color)',
} satisfies Theme['boxShadow']
