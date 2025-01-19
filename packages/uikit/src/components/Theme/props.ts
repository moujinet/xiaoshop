import type { Ref } from 'vue'

export type ThemeAppearance = 'auto' | 'light' | 'dark'
export type ThemeRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ThemeContext {
  /**
   * @default 'auto'
   */
  appearance: Ref<ThemeAppearance>
  /**
   * @default 'default'
   */
  theme: Ref<string>
  /**
   * --accent*
   *
   * @default undefined
   */
  accent?: Ref<string | undefined>
  /**
   * --neutral*
   *
   * @default undefined
   */
  gray?: Ref<string | undefined>
  /**
   * --radius
   *
   * @default undefined
   */
  radius?: Ref<ThemeRadius | undefined>
}

export interface ThemeProps {
  appearance?: ThemeAppearance
  theme?: string
  accent?: string
  gray?: string
  radius?: ThemeRadius
}
