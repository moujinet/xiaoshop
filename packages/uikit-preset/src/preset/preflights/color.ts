import type { AccentColorName, ColorName, GrayColorName, Preflight, Preflights } from '../../types'
import { getCssColorVariables, minifyCss } from '../../utils'

export function preflightColors(
  accentColors: AccentColorName[],
  grayColors: GrayColorName[],
  lightMode: string,
  darkMode: string,
): Preflights {
  const createColorsPreflight = (name: ColorName): Preflight => {
    const cssVars: string[] = []

    // Light
    cssVars.push(lightMode, '{')
    cssVars.push(`--${name}: var(--${name}-9);`)
    cssVars.push(...getCssColorVariables(name, false))
    cssVars.push(...getCssColorVariables(name, false, true))
    cssVars.push('}')

    // Dark
    cssVars.push(darkMode, '{')
    cssVars.push(`--${name}: var(--${name}-9);`)
    cssVars.push(...getCssColorVariables(name, true))
    cssVars.push(...getCssColorVariables(name, true, true))
    cssVars.push('}')

    return {
      getCSS() {
        return minifyCss(cssVars.join(''))
      },
    }
  }

  const createBlackWhitePreflight = (name: ColorName): Preflight => {
    const cssVars: string[] = []

    cssVars.push(lightMode, '{')
    cssVars.push(`--${name}: ${name === 'black' ? '0 0 0' : '255 255 255'};`)
    cssVars.push(...getCssColorVariables(name, false, true))
    cssVars.push('}')

    return {
      getCSS() {
        return minifyCss(cssVars.join(''))
      },
    }
  }

  return [
    // Colors
    ...[
      accentColors,
      grayColors,
    ].flat().map(createColorsPreflight),
    // Black
    createBlackWhitePreflight('black'),
    // White
    createBlackWhitePreflight('white'),
  ]
}
