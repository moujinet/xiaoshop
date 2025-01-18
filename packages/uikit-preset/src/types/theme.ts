import type { CssVarColor } from './color'

export interface ThemeConfig {
  name: string
  tokens: {
    light: ThemeTokens
    dark?: Partial<ThemeTokens>
  }
}
export interface ThemeTokens {
  theme: ThemeColorTokens
  background: ThemeBackgroundTokens
  foreground: ThemeForegroundTokens
}

export interface ThemeColorTokens {
  primary: ThemeColorShaders
  accent: CssVarColor | ThemeColorShaders
  info: CssVarColor | ThemeColorShaders
  success: CssVarColor | ThemeColorShaders
  warning: CssVarColor | ThemeColorShaders
  danger: CssVarColor | ThemeColorShaders
}

export interface ThemeBackgroundTokens {
  page: string
  sidebar: string
  navigator: string
  panel: string
  overlay: string
  separator: string
}

export interface ThemeForegroundTokens {
  base: string
  soft: string
  muted: string
  active: string
}

export interface ThemeColorShaders {
  base: ThemeColorShader
  soft: ThemeColorShader
  muted: ThemeColorShader
  active: ThemeColorShader
}

export type ThemeColorShader = string | [string, string]
