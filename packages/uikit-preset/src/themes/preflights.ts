import type { Preflights } from '../types'
import type { ThemeBackground, ThemeBorder, ThemeColorVariants, ThemeConfig, ThemeForeground, ThemeTokens } from './types'

function getThemeSelector(mode: string, themeName: string) {
  return mode.trim().includes(',')
    ? mode.trim().split(',').reduce((acc, mode) => {
        return mode.trim() === ':root'
          ? [acc, `[data-theme="${themeName}"]`].join('')
          : [acc, `[data-theme="${themeName}"]${mode.trim()}`].join(',')
      }, '')
    : `[data-theme="${themeName}"]${mode.trim()}`
}

export function preflightThemes(
  prefix: string,
  themes: ThemeConfig[],
  lightMode: string,
  darkMode: string,
): Preflights {
  const createTokens = (tokens: Partial<ThemeTokens>): string[] => {
    const cssVars: string[] = []

    // Color
    if (tokens.color) {
      Object.keys(tokens.color).forEach((key) => {
        const color = tokens.color![key as keyof ThemeTokens['color']]

        Object.keys(color).forEach((variant) => {
          if (variant === 'base')
            cssVars.push(`--${prefix}-${key}:${color[variant as keyof ThemeColorVariants]};`)
          else
            cssVars.push(`--${prefix}-${key}-${variant}:${color[variant as keyof ThemeColorVariants]};`)
        })
      })
    }

    // Background
    if (tokens.background) {
      Object.keys(tokens.background).forEach((key) => {
        cssVars.push(`--${prefix}-bg-${key}:${tokens.background![key as keyof ThemeBackground]};`)
      })
    }

    // Foreground
    if (tokens.foreground) {
      Object.keys(tokens.foreground).forEach((key) => {
        cssVars.push(`--${prefix}-fg-${key}:${tokens.foreground![key as keyof ThemeForeground]};`)
      })
    }

    // Border
    if (tokens.border) {
      Object.keys(tokens.border).forEach((key) => {
        cssVars.push(`--${prefix}-border-${key}:${tokens.border![key as keyof ThemeBorder]};`)
      })
    }

    return cssVars
  }

  const createThemeTokens = (theme: ThemeConfig) => {
    const cssVars: string[] = []

    // Light mode
    cssVars.push(getThemeSelector(lightMode, theme.name), '{')
    cssVars.push(...createTokens(theme.tokens.light))
    cssVars.push('}')

    // Dark mode
    if (theme.tokens.dark) {
      cssVars.push(getThemeSelector(darkMode, theme.name), '{')
      cssVars.push(...createTokens(theme.tokens.dark))
      cssVars.push('}')
    }

    return cssVars.join('')
  }

  return themes.reduce(
    (acc, theme) => {
      acc.push({
        getCSS() {
          return createThemeTokens(theme)
        },
      })
      return acc
    },
    [] as Preflights,
  )
}
