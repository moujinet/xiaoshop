import type {
  Preflight,
  Preflights,
  ThemeBackgroundTokens,
  ThemeColorShaders,
  ThemeColorTokens,
  ThemeConfig,
  ThemeForegroundTokens,
} from '../../types'
import { isColorName, isString, minifyCss } from '../../utils'

function getTheme(theme: ThemeColorTokens): string[] {
  const cssVars: string[] = []

  const getStringValue = (color: keyof ThemeColorTokens, token: string, shader: string): string => {
    return color === 'accent'
      ? `var(--accent${shader}, var(${token}${shader}))`
      : `var(${token}${shader})`
  }

  const getShadersValue = (color: keyof ThemeColorTokens, token: string, shader: string): string => {
    return color === 'accent'
      ? `var(--accent${shader}, var(${token}))`
      : `var(${token})`
  }

  ;(['primary', 'accent', 'info', 'success', 'warning', 'danger'] as Array<keyof ThemeColorTokens>)
    .forEach((color) => {
      const token = theme[color]

      if (isString(token)) {
        cssVars.push(`--theme-${color}: ${getStringValue(color, token as string, '')};`)
        cssVars.push(`--theme-${color}-inverted: ${getStringValue(color, token as string, '-1')};`)
        cssVars.push(`--theme-${color}-soft: ${getStringValue(color, token as string, '-3')};`)
        cssVars.push(`--theme-${color}-soft-inverted: ${getStringValue(color, token as string, '-10')};`)
        cssVars.push(`--theme-${color}-muted: ${getStringValue(color, token as string, '-6')};`)
        cssVars.push(`--theme-${color}-muted-inverted: ${getStringValue(color, token as string, '-8')};`)
        cssVars.push(`--theme-${color}-active: ${getStringValue(color, token as string, '-10')};`)
        cssVars.push(`--theme-${color}-active-inverted: ${getStringValue(color, token as string, '-1')};`)
      }
      else {
        const shaders = token as ThemeColorShaders

        cssVars.push(`--theme-${color}: ${getShadersValue(color, shaders.base[0], '')};`)
        cssVars.push(`--theme-${color}-inverted: ${getShadersValue(color, shaders.base[1], '-1')};`)
        cssVars.push(`--theme-${color}-soft: ${getShadersValue(color, shaders.soft[0], '-3')};`)
        cssVars.push(`--theme-${color}-soft-inverted: ${getShadersValue(color, shaders.soft[1], '-10')};`)
        cssVars.push(`--theme-${color}-muted: ${getShadersValue(color, shaders.muted[0], '-6')};`)
        cssVars.push(`--theme-${color}-muted-inverted: ${getShadersValue(color, shaders.muted[1], '-8')};`)
        cssVars.push(`--theme-${color}-active: ${getShadersValue(color, shaders.active[0], '-10')};`)
        cssVars.push(`--theme-${color}-active-inverted: ${getShadersValue(color, shaders.active[1], '-1')};`)
      }
    })

  return cssVars
}

function getBackground(background: ThemeBackgroundTokens): string[] {
  return [
    `--theme-page: ${getCssValue(background.page)};`,
    `--theme-sidebar: ${getCssValue(background.sidebar)};`,
    `--theme-navigator: ${getCssValue(background.navigator)};`,
    `--theme-panel: ${getCssValue(background.panel)};`,
    `--theme-overlay: ${getCssValue(background.overlay)};`,
    `--theme-separator: ${getCssValue(background.separator)};`,
  ]
}

function getForeground(foreground: ThemeForegroundTokens): string[] {
  return [
    `--theme-fg: ${getCssValue(foreground.base)};`,
    `--theme-fg-soft: ${getCssValue(foreground.soft)};`,
    `--theme-fg-muted: ${getCssValue(foreground.muted)};`,
    `--theme-fg-active: ${getCssValue(foreground.active)};`,
  ]
}

function getThemeSelector(mode: string, themeName: string) {
  return mode.trim().includes(',')
    ? mode.trim().split(',').reduce((acc, mode) => {
        return mode.trim() === ':root'
          ? [acc, `[data-theme="${themeName}"]`].join('')
          : [acc, `[data-theme="${themeName}"]${mode.trim()}`].join(',')
      }, '')
    : `[data-theme="${themeName}"]${mode.trim().replace(':root', '')}`
}

function getCssValue(str: string): string {
  return isColorName(str) ? `var(${str})` : str
}

export function preflightThemes(
  themes: ThemeConfig[],
  lightMode: string,
  darkMode: string,
): Preflights {
  const createThemePreflight = (theme: ThemeConfig): Preflight => {
    const cssVars: string[] = []
    const tokens = theme.tokens

    // Light
    cssVars.push(getThemeSelector(lightMode, theme.name), '{')
    cssVars.push(...getTheme(tokens.light.theme))
    cssVars.push(...getBackground(tokens.light.background))
    cssVars.push(...getForeground(tokens.light.foreground))
    cssVars.push('}')

    // Dark
    if (tokens.dark) {
      cssVars.push(getThemeSelector(darkMode, theme.name), '{')
      if (tokens.dark.theme)
        cssVars.push(...getTheme(tokens.dark.theme))
      if (tokens.dark.background)
        cssVars.push(...getBackground(tokens.dark.background))
      if (tokens.dark.foreground)
        cssVars.push(...getForeground(tokens.dark.foreground))
      cssVars.push('}')
    }

    return {
      getCSS() {
        return minifyCss(cssVars.join(''))
      },
    }
  }

  return themes.map(createThemePreflight)
}
