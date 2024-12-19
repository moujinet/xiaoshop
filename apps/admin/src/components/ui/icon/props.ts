import type { UiIconSet, UiProps } from '~/types/ui'
import type { UiIconVariants } from './ui.config'

export interface UiIconProps extends UiProps, UiIconSet {
  name: string
  color?: UiIconVariants['color']
  size?: UiIconVariants['size']
  animate?: UiIconVariants['animate']
  inline?: boolean
  active?: boolean
  loading?: boolean
}
