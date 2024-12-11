import type { VariantProps } from 'class-variance-authority'
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { kbd } from './ui.config'

export type UiKbdVariants = VariantProps<typeof kbd>

export interface UiKbdProps extends PrimitiveProps {
  value?: string
  size?: UiKbdVariants['size']
  class?: HTMLAttributes['class']
}
