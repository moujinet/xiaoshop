import type { Theme } from '@unocss/preset-mini'

const baseSize = {
  mini: '24px',
  small: '28px',
  default: '32px',
  large: '36px',
}

export const width = {
  ...baseSize,
} satisfies Theme['width']

export const height = {
  ...baseSize,
} satisfies Theme['height']

export const containers = { ...baseSize } satisfies Theme['containers']
