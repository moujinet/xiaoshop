import type { Theme } from '@unocss/preset-mini'

const names = [
  'primary',
  'success',
  'warning',
  'danger',
  'link',
  'red',
  'orangered',
  'orange',
  'gold',
  'yellow',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
]

/**
 * 色盘
 *
 * @see https://arco.design/vue/docs/token
 */
const palettes = names.reduce((palette, name) => {
  palette![name] = {
    DEFAULT: `rgba(var(--${name}-6) / <alpha-value>)`,
    1: `rgba(var(--${name}-1) / <alpha-value>)`,
    2: `rgba(var(--${name}-2) / <alpha-value>)`,
    3: `rgba(var(--${name}-3) / <alpha-value>)`,
    4: `rgba(var(--${name}-4) / <alpha-value>)`,
    5: `rgba(var(--${name}-5) / <alpha-value>)`,
    6: `rgba(var(--${name}-6) / <alpha-value>)`,
    7: `rgba(var(--${name}-7) / <alpha-value>)`,
    8: `rgba(var(--${name}-8) / <alpha-value>)`,
    9: `rgba(var(--${name}-9) / <alpha-value>)`,
    10: `rgba(var(--${name}-10) / <alpha-value>)`,
  }
  return palette
}, {} as Theme['colors'])

export const colors = {
  ...palettes,

  secondary: {
    DEFAULT: 'var(--color-secondary)',
    hover: 'var(--color-secondary-hover)',
    active: 'var(--color-secondary-active)',
    disabled: 'var(--color-secondary-disabled)',
  },

  white: 'var(--color-white)',
  black: 'var(--color-black)',
} satisfies Theme['colors']
