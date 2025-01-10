import type { Theme } from '../types'

function getThemeColorVariants(token: string, prefix: string) {
  return {
    DEFAULT: `rgba(var(--${prefix}-${token}) / <alpha-value>)`,
    thin: `var(--${prefix}-${token}-thin)`,
    alt: `var(--${prefix}-${token}-alt)`,
    soft: `var(--${prefix}-${token}-soft)`,
    contrast: `var(--${prefix}-${token}-contrast)`,
  }
}

export function themeColors(prefix: string): Theme['colors'] {
  return {
    primary: getThemeColorVariants('primary', prefix),
    secondary: getThemeColorVariants('secondary', prefix),
    accent: getThemeColorVariants('accent', prefix),
    info: getThemeColorVariants('info', prefix),
    success: getThemeColorVariants('success', prefix),
    warning: getThemeColorVariants('warning', prefix),
    danger: getThemeColorVariants('danger', prefix),
    page: `var(--${prefix}-bg-page)`,
    panel: `var(--${prefix}-bg-panel)`,
    sidebar: `var(--${prefix}-bg-sidebar)`,
    navigator: `var(--${prefix}-bg-navigator)`,
    overlay: `var(--${prefix}-bg-overlay)`,
    fg: {
      base: `var(--${prefix}-fg-base)`,
      thin: `var(--${prefix}-fg-thin)`,
      alt: `var(--${prefix}-fg-alt)`,
      soft: `var(--${prefix}-fg-soft)`,
    },
    border: {
      DEFAULT: `var(--${prefix}-border-base)`,
      input: `var(--${prefix}-border-input)`,
    },
  } satisfies Theme['colors']
}
