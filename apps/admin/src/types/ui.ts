import type { HTMLAttributes } from 'vue'

export interface UiProps {
  class?: HTMLAttributes['class']
}

/**
 * RGB 颜色
 */
export type UiRgbColor = `${number}, ${number}, ${number}` | ''

/**
 * 图标集
 */
export interface UiIconSet {
  package?: string
  suffix?: string
  activeSuffix?: string
}
