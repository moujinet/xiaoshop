import type { Preflights } from '../types'
import * as radixColor from '@radix-ui/colors'
import { radixColorNames } from '../theme/colors'
import { hexToRgb } from '../utils'

type RadixColorName = keyof typeof radixColor

export function appearance(
  prefix: string = 'ui',
  lightSelector: string = ':root',
  darkSelector: string = '.dark',
): Preflights {
  const preflights = (selector: string) => {
    const isDark = selector === darkSelector
    const cssVars = [selector, '{']

    radixColorNames
      .forEach((name) => {
        const colorName = (isDark ? `${name}Dark` : name) as RadixColorName
        const colors = radixColor[colorName]

        for (let i = 1; i <= 12; i++) {
          const hexColor = colors[`${name}${i}` as keyof typeof colors]
          const rgbColor = hexToRgb(hexColor)
          cssVars.push(`--${prefix}-${name}-${i}:${rgbColor || hexColor};`)
        }
      })

    // Black && White
    if (!isDark) {
      ['white', 'black'].forEach((name) => {
        const colorName = `${name}A` as RadixColorName
        const colors = radixColor[colorName]

        for (let i = 1; i <= 12; i++) {
          const color = colors[`${colorName}${i}` as keyof typeof colors]
          cssVars.push(`--${prefix}-${name}-${i}:${color};`)
        }
      })
    }

    cssVars.push('}')
    return cssVars.join('')
  }

  return [
    // Light CssVars
    {
      layer: 'preflights',
      getCSS() {
        return preflights(lightSelector)
      },
    },
    // Dark CssVars
    {
      layer: 'preflights',
      getCSS() {
        return preflights(darkSelector)
      },
    },
  ]
}
