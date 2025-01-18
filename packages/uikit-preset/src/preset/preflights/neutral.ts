import type { GrayColorName, Preflights } from '../../types'
import { minifyCss } from '../../utils'

export function preflightNeutral(grayColor: GrayColorName, lightMode: string, darkMode: string): Preflights {
  const createDefaultNeutralPreflight = (): string[] => {
    return Array.from(Array.from({ length: 12 }).keys()).reduce((acc, _, i) => {
      acc.push(`--neutral-${i + 1}: var(--${grayColor}-${i + 1});`)
      acc.push(`--neutral-a${i + 1}: var(--${grayColor}-a${i + 1});`)
      return acc
    }, [] as string[])
  }

  const cssVars: string[] = []

  // Light
  cssVars.push(lightMode, '{')
  cssVars.push(...createDefaultNeutralPreflight())
  cssVars.push('}')

  // Dark
  cssVars.push(darkMode, '{')
  cssVars.push(...createDefaultNeutralPreflight())
  cssVars.push('}')

  return [
    {
      getCSS() {
        return minifyCss(cssVars.join(''))
      },
    },
  ]
}
