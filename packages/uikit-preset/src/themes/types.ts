export type ColorCssVar = `var(--${string})`
export type ColorHex = `#${string}`
export type ColorRGB = `rgb(${ColorRGBValue})` | `rgba(${ColorRGBAValue})`
export type ColorRGBValue = `${number},${number},${number}` | `${number}, ${number}, ${number}`
export type ColorRGBAValue = `${number},${number},${number},${number}` | `${number}, ${number}, ${number}, ${number}`

export interface ThemeConfig {
  name: string
  label: string
  tokens: {
    light: Partial<ThemeTokens>
    dark?: Partial<ThemeTokens>
  }
}

export interface ThemeTokens {
  /**
   * 颜色
   */
  color: ThemeColor
  /**
   * 背景
   */
  background: ThemeBackground
  /**
   * 前景
   */
  foreground: ThemeForeground
  /**
   * 边框
   */
  border: ThemeBorder
}

export interface ThemeColor {
  /**
   * 主色
   */
  primary: ThemeColorVariants
  /**
   * 辅助色
   */
  secondary: ThemeColorVariants
  /**
   * 主题色
   */
  accent: ThemeColorVariants
  /**
   * 信息色
   */
  info: ThemeColorVariants
  /**
   * 成功色
   */
  success: ThemeColorVariants
  /**
   * 警告色
   */
  warning: ThemeColorVariants
  /**
   * 危险色
   */
  danger: ThemeColorVariants
}

export type ThemeColorValue = ColorCssVar | ColorHex | ColorRGB

export interface ThemeBackground {
  /**
   * 页面背景
   */
  page: ThemeColorValue
  /**
   * 面板背景
   */
  panel: ThemeColorValue
  /**
   * 侧边栏背景
   */
  sidebar: ThemeColorValue
  /**
   * 导航栏背景
   */
  navigator: ThemeColorValue
  /**
   * 遮罩背景
   */
  overlay: ThemeColorValue
}

export interface ThemeForeground {
  /**
   * 默认
   *
   * 应用于 `文本颜色` 等
   */
  base: ThemeColorValue
  /**
   * 稀释
   *
   * 应用于 `次要文本颜色` 等
   */
  thin: ThemeColorValue
  /**
   * 突出
   *
   * 应用于 `标题颜色` 等
   */
  alt: ThemeColorValue
  /**
   * 柔和
   *
   * 应用于 `占位符文本颜色` 等
   */
  soft: ThemeColorValue
}

export interface ThemeBorder {
  /**
   * 分隔符
   */
  base: ThemeColorValue
  /**
   * 输入框，按钮等
   */
  input: ThemeColorValue
}

export interface ThemeColorVariants {
  /**
   * 默认
   *
   * 仅支持 RGB 色值, 例如 `255, 255, 255`
   * 对应 CSS 变量 `--${prefix}-${token}`，例如 `--ui-primary`
   */
  base: ColorRGBValue
  /**
   * 稀释
   *
   * 应用于 `悬停背景` 等
   * 对应 CSS 变量 `--${prefix}-${token}-thin`，例如 `--ui-primary-thin`
   */
  thin: ThemeColorValue
  /**
   * 突出
   *
   * 应用于 `激活背景` 等
   * 对应 CSS 变量 `--${prefix}-${token}-alt`，例如 `--ui-primary-alt`
   */
  alt: ThemeColorValue
  /**
   * 柔和
   *
   * 应用于 `柔色背景` 等
   * 对应 CSS 变量 `--${prefix}-${token}-soft`，例如 `--ui-primary-soft`
   */
  soft: ThemeColorValue
  /**
   * 对比
   *
   * 应用于 `文本颜色` 等
   * 对应 CSS 变量 `--${prefix}-${token}-contrast`，例如 `--ui-primary-contrast`
   */
  contrast: ThemeColorValue
}
