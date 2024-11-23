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

  border: {
    DEFAULT: 'var(--color-border-2)',
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
  text: {
    DEFAULT: 'var(--color-text-2)',
    1: 'var(--color-text-1)',
    2: 'var(--color-text-2)',
    3: 'var(--color-text-3)',
    4: 'var(--color-text-4)',
  },
  secondary: {
    DEFAULT: 'var(--color-secondary)',
    hover: 'var(--color-secondary-hover)',
    active: 'var(--color-secondary-active)',
    disabled: 'var(--color-secondary-disabled)',
  },
  white: {
    DEFAULT: 'var(--color-white)',
  },
  black: {
    DEFAULT: 'var(--color-black)',
  },
  panel: {
    DEFAULT: 'var(--color-bg-1)',
  },
  card: {
    DEFAULT: 'var(--color-bg-2)',
  },
  modal: {
    DEFAULT: 'var(--color-bg-3)',
  },
  popup: {
    DEFAULT: 'var(--color-bg-popup)',
  },
} satisfies Theme['colors']
