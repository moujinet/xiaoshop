import type { HTMLAttributes } from 'vue'
import type { PrimitiveProps as RadixPrimitiveProps } from 'radix-vue'

export interface BaseProps {
  class?: HTMLAttributes['class']
}

export type PrimitiveProps = BaseProps & RadixPrimitiveProps
