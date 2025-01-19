import type { PrimitiveProps } from '~/types'
import type { ButtonVariants } from './button.ui'

export interface ButtonProps extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  color?: ButtonVariants['color']
  size?: ButtonVariants['size']
  radius?: ButtonVariants['radius']
  disabled?: boolean
  loading?: boolean
}

export type { ButtonVariants }
