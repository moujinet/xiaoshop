import type { Theme } from '../../types'

/**
 * Breakpoints
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/breakpoints#available-sizes}
 */
export const breakpoints = {
  // Phones (landscape)
  xs: '520px',
  // Tablets (portrait)
  sm: '768px',
  // Tablets (landscape)
  md: '1024px',
  // Laptops
  lg: '1280px',
  // Desktops
  xl: '1640px',
} satisfies Theme['breakpoints']

export const verticalBreakpoints = { ...breakpoints } satisfies Theme['breakpoints']

/**
 * Spacing
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/spacing#space-scale}
 */
export const spacing = {
  'DEFAULT': '16px',
  'none': '0',
  'xs': '4px',
  'sm': '8px',
  'md': '12px',
  'lg': '16px',
  'xl': '24px',
  '2xl': '32px',
  '3xl': '40px',
  '4xl': '48px',
  '5xl': '64px',
} satisfies Theme['spacing']

/**
 * Border Radius
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/radius#radius-scale}
 */
export const borderRadius = {
  'DEFAULT': '3px',
  'none': '0px',
  'xs': '3px',
  'sm': '4px',
  'md': '6px',
  'lg': '8px',
  'xl': '12px',
  '2xl': '16px',
  'full': '50%',
} satisfies Theme['borderRadius']

/**
 * Box Shadow
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/shadows}
 */
export const boxShadow = {
  'DEFAULT': 'var(--shadow-3)',
  'sm': 'var(--shadow-2)',
  'md': 'var(--shadow-3)',
  'lg': 'var(--shadow-4)',
  'xl': 'var(--shadow-5)',
  '2xl': 'var(--shadow-6)',
  'inner': `var(--shadow-1)`,
} satisfies Theme['boxShadow']
