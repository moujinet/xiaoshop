import { accentColors } from '~/components/ui/theme/ui.config'

// UiIcon
export const ui = createVariants({
  variants: {
    color: {
      ...accentColors,
    },
    size: {
      sm: 'text-4',
      md: 'text-5',
      lg: 'text-6',
      xl: 'text-8',
    },
    animate: {
      spin: 'animate-spin',
      pulse: 'animate-pulse',
      bounce: 'animate-bounce',
    },
  },
  defaultVariants: {
    size: 'md',
    animate: null,
    color: null,
  },
})

export type UiIconVariants = VariantProps<typeof ui.variants>

export default ui
