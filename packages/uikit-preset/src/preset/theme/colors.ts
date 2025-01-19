import type { ColorName, GrayColorName, Theme } from '../../types'
import { getColorsForTheme } from '../../utils'

export function colors(
  names: ColorName[],
  defaultGrayColor: GrayColorName,
): Theme['colors'] {
  return {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',

    // Black
    black: {
      DEFAULT: 'rgb(var(--black) / <alpha-value>)',
      ...Array.from(Array.from({ length: 12 }).keys()).reduce((acc, _, i) => ({
        ...acc,
        [`a${i + 1}`]: `var(--black-a${i + 1})`,
      }), {} as Theme['colors']),
    },

    // White
    white: {
      DEFAULT: 'rgb(var(--white) / <alpha-value>)',
      ...Array.from(Array.from({ length: 12 }).keys()).reduce((acc, _, i) => ({
        ...acc,
        [`a${i + 1}`]: `var(--white-a${i + 1})`,
      }), {} as Theme['colors']),
    },

    // Neutral
    neutral: {
      DEFAULT: 'rgb(var(--neutral) / <alpha-value>)',
      ...Array.from(Array.from({ length: 12 }).keys()).reduce((acc, _, i) => ({
        ...acc,
        [i + 1]: `rgb(var(--neutral-${i + 1}, var(--${defaultGrayColor}-${i + 1})) / <alpha-value>)`,
      }), {} as Theme['colors']),
    },

    neutralA: {
      ...Array.from(Array.from({ length: 12 }).keys()).reduce((acc, _, i) => ({
        ...acc,
        [i + 1]: `var(--neutral-a${i + 1}, var(--${defaultGrayColor}-a${i + 1}))`,
      }), {} as Theme['colors']),
    },

    // Colors
    ...names.reduce((acc, name) => ({
      ...acc,
      [name]: getColorsForTheme(name),
      [`${name}A`]: getColorsForTheme(name, true),
    }), {} as Theme['colors']),
  }
}

export function themeColors(): Theme['colors'] {
  return {
    ...['primary', 'accent', 'info', 'success', 'warning', 'danger'].reduce(
      (acc, name) => ({
        ...acc,
        [name]: {
          DEFAULT: `rgb(var(--theme-${name}) / <alpha-value>)`,
          inverted: `rgb(var(--theme-${name}-inverted) / <alpha-value>)`,
          soft: `rgb(var(--theme-${name}-soft) / <alpha-value>)`,
          softInverted: `rgb(var(--theme-${name}-soft-inverted) / <alpha-value>)`,
          muted: `rgb(var(--theme-${name}-muted) / <alpha-value>)`,
          mutedInverted: `rgb(var(--theme-${name}-muted-inverted) / <alpha-value>)`,
          active: `rgb(var(--theme-${name}-active) / <alpha-value>)`,
          activeInverted: `rgb(var(--theme-${name}-active-inverted) / <alpha-value>)`,
        },
      }),
      {} as Theme['colors'],
    ),
    ...['page', 'sidebar', 'navigator', 'panel', 'overlay', 'separator'].reduce(
      (acc, name) => ({
        ...acc,
        [name]: `rgb(var(--theme-${name}))`,
      }),
      {} as Theme['colors'],
    ),
    ...['fg', 'fg-soft', 'fg-muted', 'fg-active'].reduce(
      (acc, name) => ({
        ...acc,
        [name]: `rgb(var(--theme-${name}))`,
      }),
      {} as Theme['colors'],
    ),
  }
}
