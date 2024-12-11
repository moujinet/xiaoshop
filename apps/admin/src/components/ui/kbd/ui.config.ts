import { cva } from 'class-variance-authority'

export const kbd = cva([
  'flex-(inline center) ring-(1 inset gray-300) text-gray-900 rounded',
  'px-1',
], {
  variants: {
    size: {
      sm: 'h-4 min-w-[16px] text-[10px]',
      md: 'h-5 min-w-[20px] text-[11px]',
      lg: 'h-6 min-w-[24px] text-[12px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export default defineVariants({
  base: 'flex-(inline center) ring-(1 inset gray-300) text-gray-900 rounded px-1',
  variants: {
    size: {
      sm: 'h-4 min-w-[16px] text-[10px]',
      md: 'h-5 min-w-[20px] text-[11px]',
      lg: 'h-6 min-w-[24px] text-[12px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
