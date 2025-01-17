import type { Theme } from '../types'

export const radixColorNames = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'brown',
  'bronze',
  'gold',
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
  'orange',
]

export function colors(prefix: string) {
  return {
    ...radixColorNames.reduce(
      (color, name) => ({
        ...color,
        [name]: {
          DEFAULT: `rgba(var(--${prefix}-${name}-11) / <alpha-value>)`,
          1: `rgba(var(--${prefix}-${name}-1) / <alpha-value>)`,
          2: `rgba(var(--${prefix}-${name}-2) / <alpha-value>)`,
          3: `rgba(var(--${prefix}-${name}-3) / <alpha-value>)`,
          4: `rgba(var(--${prefix}-${name}-4) / <alpha-value>)`,
          5: `rgba(var(--${prefix}-${name}-5) / <alpha-value>)`,
          6: `rgba(var(--${prefix}-${name}-6) / <alpha-value>)`,
          7: `rgba(var(--${prefix}-${name}-7) / <alpha-value>)`,
          8: `rgba(var(--${prefix}-${name}-8) / <alpha-value>)`,
          9: `rgba(var(--${prefix}-${name}-9) / <alpha-value>)`,
          10: `rgba(var(--${prefix}-${name}-10) / <alpha-value>)`,
          11: `rgba(var(--${prefix}-${name}-11) / <alpha-value>)`,
          12: `rgba(var(--${prefix}-${name}-12) / <alpha-value>)`,
        },
      }),
      {} as Theme['colors'],
    ),
    white: {
      DEFAULT: `var(--${prefix}-white-11)`,
      1: `var(--${prefix}-white-1)`,
      2: `var(--${prefix}-white-2)`,
      3: `var(--${prefix}-white-3)`,
      4: `var(--${prefix}-white-4)`,
      5: `var(--${prefix}-white-5)`,
      6: `var(--${prefix}-white-6)`,
      7: `var(--${prefix}-white-7)`,
      8: `var(--${prefix}-white-8)`,
      9: `var(--${prefix}-white-9)`,
      10: `var(--${prefix}-white-10)`,
      11: `var(--${prefix}-white-11)`,
      12: `var(--${prefix}-white-12)`,
    },
    black: {
      DEFAULT: `var(--${prefix}-black-11)`,
      1: `var(--${prefix}-black-1)`,
      2: `var(--${prefix}-black-2)`,
      3: `var(--${prefix}-black-3)`,
      4: `var(--${prefix}-black-4)`,
      5: `var(--${prefix}-black-5)`,
      6: `var(--${prefix}-black-6)`,
      7: `var(--${prefix}-black-7)`,
      8: `var(--${prefix}-black-8)`,
      9: `var(--${prefix}-black-9)`,
      10: `var(--${prefix}-black-10)`,
      11: `var(--${prefix}-black-11)`,
      12: `var(--${prefix}-black-12)`,
    },
  }
}
