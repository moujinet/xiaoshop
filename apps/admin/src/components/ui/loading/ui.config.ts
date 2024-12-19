// UiLoading

export const ui = createVariants({
  indicator: 'flex-(~ v-center) gap-2',
  tip: 'text-sm',
  overlay: 'absolute top-0 left-0 w-full h-full flex-(~ center) backdrop-blur-sm bg-black/5',
  variants: {
    indicator: {
      circle: 'i-svg-spinners-180-ring-with-bg',
      dots: 'i-svg-spinners-3-dots-scale',
    },
    size: {
      sm: 'text-4',
      md: 'text-5',
      lg: 'text-6',
      xl: 'text-8',
    },
  },
  defaultVariants: {
    indicator: 'circle',
    size: 'sm',
  },
})

export type UiLoadingVariants = VariantProps<typeof ui.variants>

export default ui
