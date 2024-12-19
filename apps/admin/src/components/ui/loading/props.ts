import type { PrimitiveProps } from 'radix-vue'
import type { UiLoadingVariants } from './ui.config'
import type { UiProps } from '~/types/ui'

export type UiLoadingProps = UiProps & PrimitiveProps & {
  delay?: number
  tip?: string
  indicator?: UiLoadingVariants['indicator']
  size?: UiLoadingVariants['size']
  loading?: boolean
}
