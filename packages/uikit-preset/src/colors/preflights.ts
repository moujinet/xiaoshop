import type { Preflight, Preflights } from '../types'
import type { AccentColorName, GrayColorName } from './types'

import * as _radixColor from '@radix-ui/colors'
import { hexToRGB, minifyCss } from './utils'

type RadixColorName = keyof typeof _radixColor

export function preflightRadixColors(
  accentColors: AccentColorName[],
  grayColors: GrayColorName[],
  lightMode: string,
  darkMode: string,
): Preflights {
  // Light mode
  const createLightColors = (names: string[], solidScale: number = 9, scales: number = 12) => {
    const cssVars: string[] = []

    // Colors
    cssVars.push(lightMode, '{')

    names.forEach((name) => {
      const colorName = `${name}` as RadixColorName
      const colors = _radixColor[colorName]

      // RGB Values
      cssVars.push(`--${name}:${hexToRGB(`${colors[`${name}${solidScale}` as keyof typeof colors]}`)};`)

      // Solid
      for (let i = 1; i <= scales; i++) {
        const color = colors[`${name}${i}` as keyof typeof colors]
        cssVars.push(`--${name}-${i}:${color};`)
      }

      const alphaColorName = `${name}A` as RadixColorName
      const alphaColors = _radixColor[alphaColorName]

      // Alpha
      for (let i = 1; i <= scales; i++) {
        const color = alphaColors[`${name}A${i}` as keyof typeof alphaColors]
        cssVars.push(`--${name}-a${i}:${color};`)
      }
    })

    cssVars.push('}')

    // P3 Colors
    cssVars.push(
      '@supports (color: color(display-p3 1 1 1)) {',
      '@media (color-gamut: p3) {',
      lightMode,
      '{',
    )

    names.forEach((name) => {
      const colorName = `${name}P3` as RadixColorName
      const colors = _radixColor[colorName]

      // Solid
      for (let i = 1; i <= scales; i++) {
        const color = colors[`${name}${i}` as keyof typeof colors]
        cssVars.push(`--${name}-${i}:${color};`)
      }

      const alphaColorName = `${name}P3A` as RadixColorName
      const alphaColors = _radixColor[alphaColorName]

      // Alpha
      for (let i = 1; i <= scales; i++) {
        const color = alphaColors[`${name}A${i}` as keyof typeof alphaColors]
        cssVars.push(`--${name}-a${i}:${color};`)
      }
    })

    cssVars.push('}}}')

    return cssVars.join('')
  }

  // Dark mode
  const createDarkColors = (names: string[], solidScale: number = 9, scales: number = 12) => {
    const cssVars: string[] = []

    // Colors
    cssVars.push(darkMode, '{')

    names.forEach((name) => {
      const colorName = `${name}Dark` as RadixColorName
      const colors = _radixColor[colorName]

      // RGB Values
      cssVars.push(`--${name}:${hexToRGB(`${colors[`${name}${solidScale}` as keyof typeof colors]}`)};`)

      // Solid
      for (let i = 1; i <= scales; i++) {
        const color = colors[`${name}${i}` as keyof typeof colors]
        cssVars.push(`--${name}-${i}:${color};`)
      }

      const alphaColorName = `${name}DarkA` as RadixColorName
      const alphaColors = _radixColor[alphaColorName]

      // Alpha
      for (let i = 1; i <= scales; i++) {
        const color = alphaColors[`${name}A${i}` as keyof typeof alphaColors]
        cssVars.push(`--${name}-a${i}:${color};`)
      }
    })

    cssVars.push('}')

    // P3 Colors
    cssVars.push(
      '@supports (color: color(display-p3 1 1 1)) {',
      '@media (color-gamut: p3) {',
      darkMode,
      '{',
    )

    names.forEach((name) => {
      const colorName = `${name}DarkP3` as RadixColorName
      const colors = _radixColor[colorName]

      // Solid
      for (let i = 1; i <= scales; i++) {
        const color = colors[`${name}${i}` as keyof typeof colors]
        cssVars.push(`--${name}-${i}:${color};`)
      }

      const alphaColorName = `${name}DarkP3A` as RadixColorName
      const alphaColors = _radixColor[alphaColorName]

      // Alpha
      for (let i = 1; i <= scales; i++) {
        const color = alphaColors[`${name}A${i}` as keyof typeof alphaColors]
        cssVars.push(`--${name}-a${i}:${color};`)
      }
    })

    cssVars.push('}}}')

    return cssVars.join('')
  }

  // Black & White
  const createBlackWhiteColors = (scales: number = 12) => {
    const names = ['black', 'white']
    const cssVars: string[] = [':root {']

    names.forEach((name) => {
      if (name === 'black')
        cssVars.push('--black:0,0,0;')
      else if (name === 'white')
        cssVars.push('--white:255,255,255;')

      const colorName = `${name}A` as RadixColorName
      const colors = _radixColor[colorName]

      for (let i = 1; i <= scales; i++) {
        const color = colors[`${name}A${i}` as keyof typeof colors]
        cssVars.push(`--${name}-a${i}:${color};`)
      }
    })

    cssVars.push('}')

    return cssVars.join('')
  }

  // Neutral
  const createNeutralColors = (scales: number = 12) => {
    const modes: string[] = [lightMode, darkMode]
    const cssVars: string[] = []

    modes.forEach((mode) => {
      cssVars.push(mode, '{')

      mode !== darkMode && cssVars.push(`--neutral:var(--gray);`)

      // Solid
      for (let i = 1; i <= scales; i++) {
        cssVars.push(`--neutral-${i}:var(--gray-${i});`)
      }

      // Alpha
      for (let i = 1; i <= scales; i++) {
        cssVars.push(`--neutral-a${i}:var(--gray-a${i});`)
      }

      cssVars.push('}')
    })

    return cssVars.join('')
  }

  return [
    // black & white
    {
      getCSS() {
        return createBlackWhiteColors()
      },
    },

    // light gray colors
    {
      getCSS() {
        return createLightColors(grayColors)
      },
    },

    // dark gray colors
    {
      getCSS() {
        return createDarkColors(grayColors)
      },
    },

    // light accent colors
    {
      getCSS() {
        return createLightColors(accentColors)
      },
    },

    // dark accent colors
    {
      getCSS() {
        return createDarkColors(accentColors)
      },
    },

    // neutral colors
    {
      getCSS() {
        return createNeutralColors()
      },
    },
  ]
}

export function preflightBase(lightMode: string, darkMode: string): Preflight {
  const css = `
:root {
  overflow-wrap: break-word;
  text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${lightMode} {
  color-scheme:light;
}

${darkMode} {
  color-scheme:dark;
}`

  return {
    getCSS() {
      return minifyCss(css)
    },
  }
}

export function preflightShadows(lightMode: string, darkMode: string): Preflight {
  const css = `
${lightMode} {
  --shadow-1:
    inset 0 0 0 1px var(--neutral-a5),
    inset 0 1.5px 2px 0 var(--neutral-a2),
    inset 0 1.5px 2px 0 var(--black-a2);

  --shadow-2:
    0 0 0 1px var(--neutral-a3),
    0 0 0 0.5px var(--black-a1),
    0 1px 1px 0 var(--neutral-a2),
    0 2px 1px -1px var(--black-a1),
    0 1px 3px 0 var(--black-a1);

  --shadow-3:
    0 0 0 1px var(--neutral-a3),
    0 2px 3px -2px var(--neutral-a3),
    0 3px 12px -4px var(--black-a2),
    0 4px 16px -8px var(--black-a2);

  --shadow-4:
    0 0 0 1px var(--neutral-a3),
    0 8px 40px var(--black-a1),
    0 12px 32px -16px var(--neutral-a3);

  --shadow-5:
    0 0 0 1px var(--neutral-a3),
    0 12px 60px var(--black-a3),
    0 12px 32px -16px var(--neutral-a5);

  --shadow-6:
    0 0 0 1px var(--neutral-a3),
    0 12px 60px var(--black-a3),
    0 16px 64px var(--neutral-a2),
    0 16px 36px -20px var(--neutral-a7);
}

@supports (color: color-mix(in oklab, white, black)) {
  ${lightMode} {
    --shadow-1:
      inset 0 0 0 1px var(--neutral-a5),
      inset 0 1.5px 2px 0 var(--neutral-a2),
      inset 0 1.5px 2px 0 var(--black-a2);

    --shadow-2:
      0 0 0 1px color-mix(in oklab, var(--neutral-a3), var(--neutral-3) 25%),
      0 0 0 0.5px var(--black-a1),
      0 1px 1px 0 var(--neutral-a2),
      0 2px 1px -1px var(--black-a1),
      0 1px 3px 0 var(--black-a1);

    --shadow-3:
      0 0 0 1px color-mix(in oklab, var(--neutral-a3), var(--neutral-3) 25%),
      0 2px 3px -2px var(--neutral-a3),
      0 3px 12px -4px var(--black-a2),
      0 4px 16px -8px var(--black-a2);

    --shadow-4:
      0 0 0 1px color-mix(in oklab, var(--neutral-a3), var(--neutral-3) 25%),
      0 8px 40px var(--black-a1),
      0 12px 32px -16px var(--neutral-a3);

    --shadow-5:
      0 0 0 1px color-mix(in oklab, var(--neutral-a3), var(--neutral-3) 25%),
      0 12px 60px var(--black-a3),
      0 12px 32px -16px var(--neutral-a5);

    --shadow-6:
      0 0 0 1px color-mix(in oklab, var(--neutral-a3), var(--neutral-3) 25%),
      0 12px 60px var(--black-a3),
      0 16px 64px var(--neutral-a2),
      0 16px 36px -20px var(--neutral-a7);
  }
}

${darkMode} {
  --shadow-1:
    inset 0 -1px 1px 0 var(--neutral-a3),
    inset 0 0 0 1px var(--neutral-a3),
    inset 0 3px 4px 0 var(--black-a5),
    inset 0 0 0 1px var(--neutral-a4);

  --shadow-2:
    0 0 0 1px var(--neutral-a6),
    0 0 0 0.5px var(--black-a3),
    0 1px 1px 0 var(--black-a6),
    0 2px 1px -1px var(--black-a6),
    0 1px 3px 0 var(--black-a5);

  --shadow-3:
    0 0 0 1px var(--neutral-a6),
    0 2px 3px -2px var(--black-a3),
    0 3px 8px -2px var(--black-a6),
    0 4px 12px -4px var(--black-a7);

  --shadow-4:
    0 0 0 1px var(--neutral-a6),
    0 8px 40px var(--black-a3),
    0 12px 32px -16px var(--black-a5);

  --shadow-5:
    0 0 0 1px var(--neutral-a6),
    0 12px 60px var(--black-a5),
    0 12px 32px -16px var(--black-a7);

  --shadow-6:
    0 0 0 1px var(--neutral-a6),
    0 12px 60px var(--black-a4),
    0 16px 64px var(--black-a6),
    0 16px 36px -20px var(--black-a11);
}

@supports (color: color-mix(in oklab, white, black)) {
  ${darkMode} {
    --shadow-1:
      inset 0 -1px 1px 0 var(--neutral-a3),
      inset 0 0 0 1px var(--neutral-a3),
      inset 0 3px 4px 0 var(--black-a5),
      inset 0 0 0 1px var(--neutral-a4);

    --shadow-2:
      0 0 0 1px color-mix(in oklab, var(--neutral-a6), var(--neutral-6) 25%),
      0 0 0 0.5px var(--black-a3),
      0 1px 1px 0 var(--black-a6),
      0 2px 1px -1px var(--black-a6),
      0 1px 3px 0 var(--black-a5);

    --shadow-3:
      0 0 0 1px color-mix(in oklab, var(--neutral-a6), var(--neutral-6) 25%),
      0 2px 3px -2px var(--black-a3),
      0 3px 8px -2px var(--black-a6),
      0 4px 12px -4px var(--black-a7);

    --shadow-4:
      0 0 0 1px color-mix(in oklab, var(--neutral-a6), var(--neutral-6) 25%),
      0 8px 40px var(--black-a3),
      0 12px 32px -16px var(--black-a5);

    --shadow-5:
      0 0 0 1px color-mix(in oklab, var(--neutral-a6), var(--neutral-6) 25%),
      0 12px 60px var(--black-a5),
      0 12px 32px -16px var(--black-a7);

    --shadow-6:
      0 0 0 1px color-mix(in oklab, var(--gray-a6), var(--gray-6) 25%),
      0 12px 60px var(--black-a4),
      0 16px 64px var(--black-a6),
      0 16px 36px -20px var(--black-a11);
  }
}`

  return {
    getCSS() {
      return minifyCss(css)
    },
  }
}
