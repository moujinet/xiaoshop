import type { Theme } from '../types'
import type { AccentColorName, GrayColorName } from './types'

function getScaleColors(color: string): Theme['colors'] {
  return {
    DEFAULT: `rgba(var(--${color}) / <alpha-value>)`,
    ...Array.from(Array.from({ length: 12 }).keys()).reduce(
      (acc, _, i) => {
        acc[i + 1] = `var(--${color}-${i + 1})`
        return acc
      },
      {} as Record<number | string, string>,
    ),
  }
}

function getScaleAlphaColors(color: string): Theme['colors'] {
  return {
    ...Array.from(Array.from({ length: 12 }).keys()).reduce(
      (acc, _, i) => {
        acc[i + 1] = `var(--${color}-a${i + 1})`
        return acc
      },
      {} as Record<number | string, string>,
    ),
  }
}

function baseColors(): Theme['colors'] {
  return {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    white: {
      DEFAULT: 'rgba(var(--white), <alpha-value>)',
      ...getScaleAlphaColors('white'),
    },
    black: {
      DEFAULT: 'rgba(var(--black), <alpha-value>)',
      ...getScaleAlphaColors('black'),
    },
  }
}

function radixColors(
  accentColors: AccentColorName[],
  grayColors: GrayColorName[],
): Theme['colors'] {
  return [
    ...accentColors,
    ...grayColors,
  ].reduce(
    (acc, name) => ({
      ...acc,
      [name]: getScaleColors(name),
      [`${name}A`]: getScaleAlphaColors(name),
    }),
    {} satisfies Theme['colors'],
  )
}

export function colors(
  accentColors: AccentColorName[],
  grayColors: GrayColorName[],
): Theme['colors'] {
  return {
    ...baseColors(),
    ...radixColors(accentColors, grayColors),
  }
}
