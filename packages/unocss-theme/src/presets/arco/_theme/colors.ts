import type { Theme } from '~/types'

const colorNames = [
  'primary',
  'success',
  'warning',
  'danger',
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
  'neutral',
]

/**
 * 色盘
 *
 * @see https://arco.design/vue/docs/token
 */
const palettes = colorNames.reduce((palette, name) => {
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
  /**
   * 色盘
   */
  ...palettes,

  secondary: {
    DEFAULT: 'var(--color-secondary)',
    hover: 'var(--color-secondary-hover)',
    active: 'var(--color-secondary-active)',
    disabled: 'var(--color-secondary-disabled)',
  },

  text: {
    DEFAULT: 'var(--color-text-2)',
    1: 'var(--color-text-1)',
    2: 'var(--color-text-2)',
    3: 'var(--color-text-3)',
    4: 'var(--color-text-4)',
  },

  border: {
    DEFAULT: 'var(--color-border)',
    1: 'var(--color-border-1)',
    2: 'var(--color-border-2)',
    3: 'var(--color-border-3)',
    4: 'var(--color-border-4)',
  },

  fill: {
    DEFAULT: 'var(--color-fill-2)',
    1: 'var(--color-fill-1)',
    2: 'var(--color-fill-2)',
    3: 'var(--color-fill-3)',
    4: 'var(--color-fill-4)',
  },

  bg: {
    1: 'var(--color-bg-1)',
    2: 'var(--color-bg-2)',
    3: 'var(--color-bg-3)',
    4: 'var(--color-bg-4)',
    5: 'var(--color-bg-5)',
    popup: 'var(--color-bg-popup)',
    white: 'var(--color-bg-white)',
  },

} satisfies Theme['colors']
