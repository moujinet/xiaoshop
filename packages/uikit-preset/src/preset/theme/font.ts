import type { Theme } from '../../types'

/**
 * Font Size
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/typography#type-scale}
 */
export const fontSize = {
  'xs': ['12px', '16px', '0.0025em'],
  'sm': ['14px', '20px', '0em'],
  'base': ['16px', '24px', '0em'],
  'lg': ['18px', '26px', '-0.0025em'],
  'xl': ['20px', '28px', '-0.005em'],
  '2xl': ['24px', '30px', '-0.00625em'],
  '3xl': ['28px', '36px', '-0.0075em'],
  '4xl': ['35px', '40px', '-0.01em'],
  '5xl': ['60px', '60px', '-0.025em'],
} satisfies Theme['fontSize']

/**
 * Font Family
 *
 * @see {@link https://www.radix-ui.com/themes/docs/theme/typography#font-family}
 */
export const fontFamily = {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    '"Open Sans"',
    'system-ui',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
  ].join(','),
  serif: [
    'ui-serif',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(','),
  mono: [
    'Menlo',
    'Consolas',
    '"Bitstream Vera Sans Mono"',
    'monospace',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
  ].join(','),
} satisfies Theme['fontFamily']
