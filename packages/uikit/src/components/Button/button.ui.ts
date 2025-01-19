import { radiusProps } from '~/props/radius'
import { createVariants, type VariantProps } from '~/composables/variants'

// Button
export const ui = createVariants({
  base: [
    'flex-(~ center) font-medium select-none transition-colors duration-150 ease-in-out',
    'cursor-button disabled:(opacity-60 cursor-disabled)',
  ],
  loading: 'i-svg-spinners-90-ring-with-bg',
  variants: {
    size: {
      xs: 'text-xs px-2.5 h-6 gap-1.5',
      sm: 'text-sm px-3.75 h-8 gap-2',
      md: 'text-base px-3.75 h-10 gap-2',
      lg: 'text-lg px-6.5 h-11.5 gap-2.5',
    },
    variant: { solid: '', soft: '', outline: '', ghost: '', link: '' },
    color: { primary: '', accent: '', info: '', warning: '', success: '', danger: '' },
    radius: radiusProps,
  },
  compoundVariants: [
    // Solid
    { variant: 'solid', color: 'primary', class: 'bg-primary hover:not-disabled:bg-primary/85 active:not-disabled:(ring-primary-muted ring-2) c-primary-inverted' },
    { variant: 'solid', color: 'accent', class: 'bg-accent hover:not-disabled:bg-accent/85 active:not-disabled:(ring-accent-muted ring-2) c-accent-inverted' },
    { variant: 'solid', color: 'info', class: 'bg-info hover:not-disabled:bg-info/85 active:not-disabled:(ring-info-muted ring-2) c-info-inverted' },
    { variant: 'solid', color: 'warning', class: 'bg-warning hover:not-disabled:bg-warning/85 active:not-disabled:(ring-warning-muted ring-2) c-warning-inverted' },
    { variant: 'solid', color: 'success', class: 'bg-success hover:not-disabled:bg-success/85 active:not-disabled:(ring-success-muted ring-2) c-success-inverted' },
    { variant: 'solid', color: 'danger', class: 'bg-danger hover:not-disabled:bg-danger/85 active:not-disabled:(ring-danger-muted ring-2) c-danger-inverted' },
    // Soft
    { variant: 'soft', color: 'primary', class: 'bg-primary-soft hover:not-disabled:bg-primary-muted active:not-disabled:brightness-105 c-primary' },
    { variant: 'soft', color: 'accent', class: 'bg-accent-soft hover:not-disabled:bg-accent-muted active:not-disabled:brightness-105 c-accent' },
    { variant: 'soft', color: 'info', class: 'bg-info-soft hover:not-disabled:bg-info-muted active:not-disabled:brightness-105 c-info' },
    { variant: 'soft', color: 'warning', class: 'bg-warning-soft hover:not-disabled:bg-warning-muted active:not-disabled:brightness-105 c-warning' },
    { variant: 'soft', color: 'success', class: 'bg-success-soft hover:not-disabled:bg-success-muted active:not-disabled:brightness-105 c-success' },
    { variant: 'soft', color: 'danger', class: 'bg-danger-soft hover:not-disabled:bg-danger-muted active:not-disabled:brightness-105 c-danger' },
    // Outline
    { variant: 'outline', color: 'primary', class: 'ring-(1 solid primary-muted) hover:not-disabled:bg-primary-muted active:not-disabled:brightness-105 c-primary' },
    { variant: 'outline', color: 'accent', class: 'ring-(1 solid accent-muted) hover:not-disabled:bg-accent-muted active:not-disabled:brightness-105 c-accent' },
    { variant: 'outline', color: 'info', class: 'ring-(1 solid info-muted) hover:not-disabled:bg-info-muted active:not-disabled:brightness-105 c-info' },
    { variant: 'outline', color: 'warning', class: 'ring-(1 solid warning-muted) hover:not-disabled:bg-warning-muted active:not-disabled:brightness-105 c-warning' },
    { variant: 'outline', color: 'success', class: 'ring-(1 solid success-muted) hover:not-disabled:bg-success-muted active:not-disabled:brightness-105 c-success' },
    { variant: 'outline', color: 'danger', class: 'ring-(1 solid danger-muted) hover:not-disabled:bg-danger-muted active:not-disabled:brightness-105 c-danger' },
    // Ghost
    { variant: 'ghost', color: 'primary', class: 'hover:not-disabled:bg-primary-muted active:not-disabled:brightness-105 c-primary' },
    { variant: 'ghost', color: 'accent', class: 'hover:not-disabled:bg-accent-muted active:not-disabled:brightness-105 c-accent' },
    { variant: 'ghost', color: 'info', class: 'hover:not-disabled:bg-info-muted active:not-disabled:brightness-105 c-info' },
    { variant: 'ghost', color: 'warning', class: 'hover:not-disabled:bg-warning-muted active:not-disabled:brightness-105 c-warning' },
    { variant: 'ghost', color: 'success', class: 'hover:not-disabled:bg-success-muted active:not-disabled:brightness-105 c-success' },
    { variant: 'ghost', color: 'danger', class: 'hover:not-disabled:bg-danger-muted active:not-disabled:brightness-105 c-danger' },
    // Link
    { variant: 'link', color: 'primary', class: 'hover:not-disabled:(underline underline-offset-3) c-primary' },
    { variant: 'link', color: 'accent', class: 'hover:not-disabled:(underline underline-offset-3) c-accent' },
    { variant: 'link', color: 'info', class: 'hover:not-disabled:(underline underline-offset-3) c-info' },
    { variant: 'link', color: 'warning', class: 'hover:not-disabled:(underline underline-offset-3) c-warning' },
    { variant: 'link', color: 'success', class: 'hover:not-disabled:(underline underline-offset-3) c-success' },
    { variant: 'link', color: 'danger', class: 'hover:not-disabled:(underline underline-offset-3) c-danger' },
  ],
  defaultVariants: {
    size: 'sm',
    variant: 'solid',
    color: 'primary',
    radius: 'xs',
  },
})

export type ButtonVariants = VariantProps<typeof ui.variants>

export default ui
