import type { Theme } from '@unocss/preset-mini'

const baseSize = {
  DEFAULT: '32px',
  sx: '24px',
  sm: '28px',
  md: '32px',
  lg: '36px',
}

export const width = {
  ...baseSize,
} satisfies Theme['width']

export const height = {
  ...baseSize,
} satisfies Theme['height']

export const containers = { ...baseSize } satisfies Theme['containers']
