import { cva } from 'class-variance-authority'

export const button = cva([
  'flex-(inline center) ring-(1 inset gray-300) text-gray-900 rounded',
], {
  variants: {
    variant: {
      solid: '',
      outline: '',
      soft: '',
      ghost: '',
      link: '',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    size: {
      sm: 'h-4 min-w-[16px] text-[10px]',
      md: 'h-5 min-w-[20px] text-[11px]',
      lg: 'h-6 min-w-[24px] text-[12px]',
    },
  },
  defaultVariants: {
    variant: 'solid',
    rounded: 'md',
    size: 'md',
  },
})
