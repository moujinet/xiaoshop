import type { ColorName } from '../types/color'
import * as RadixColors from '@radix-ui/colors'

type RadixColorNames = keyof typeof RadixColors

export function hexToRGB(hex: string) {
  const bigint = Number.parseInt(hex.replace('#', ''), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `${r} ${g} ${b}`
}

export function getRGBColors(
  name: string,
  isDark?: boolean,
  isAlpha?: boolean,
) {
  const colorName = `${name.trim().toLowerCase()}${isDark ? 'Dark' : ''}${isAlpha ? 'A' : ''}` as RadixColorNames
  const colors = RadixColors[colorName]

  return Object.keys(colors).reduce((acc, color) => ({
    ...acc,
    [color.replace(name, '')]: isAlpha
      ? colors[color as keyof typeof colors]
      : hexToRGB(colors[color as keyof typeof colors]),
  }), {} as Record<string, string>)
}

export function getCssColorVariables(
  name: ColorName,
  isDark?: boolean,
  isAlpha?: boolean,
): string[] {
  const colors = getRGBColors(name, isDark, isAlpha)

  return Object.keys(colors).map(
    color => `--${name}-${color.toLowerCase()}:${colors[color]};`,
  )
}

export function getColorsForTheme(name: ColorName) {
  return {
    // Solid
    DEFAULT: `rgba(var(--${name}), <alpha-value>)`,
    ...Array.from(Array.from({ length: 12 }).keys()).reduce((acc, _, i) => {
      acc[i + 1] = `rgba(var(--${name}-${i + 1}), <alpha-value>)`
      return acc
    }, {} as Record<string, string>),

    // Alpha
    ...Array.from(Array.from({ length: 12 }).keys()).reduce((acc, _, i) => {
      acc[`a${i + 1}`] = `var(--${name}-a${i + 1})`
      return acc
    }, {} as Record<string, string>),
  } as Record<string, string>
}