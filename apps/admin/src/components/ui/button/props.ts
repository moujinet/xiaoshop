import type { VariantProps } from 'class-variance-authority'
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { button } from './ui.config'

export type UiButtonVariants = VariantProps<typeof button>

export interface UiButtonProps extends PrimitiveProps {
  label?: string
  color?: string
  variant?: UiButtonVariants['variant']
  size?: UiButtonVariants['size']
  rounded?: UiButtonVariants['rounded']
  icon?: string
  iconPlacement?: 'leading' | 'trailing'
  loading?: boolean
  class?: HTMLAttributes['class']
}
