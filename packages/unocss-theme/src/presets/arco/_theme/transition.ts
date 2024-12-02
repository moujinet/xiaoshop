import type { Theme } from '~/types'

export const easing = {
  DEFAULT: 'cubic-bezier(0.34, 0.69, 0.1, 1)',
  linear: 'cubic-bezier(0, 0, 1, 1)',
  overshoot: 'cubic-bezier(0.3, 1.3, 0.3, 1)',
  decelerate: 'cubic-bezier(0.4, 0.8, 0.74, 1)',
  accelerate: 'cubic-bezier(0.26, 0, 0.6, 0.2)',
} satisfies Theme['easing']
