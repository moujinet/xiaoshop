import type { Variants } from '../types'
import { variantPrimitives } from './primitives'

export function variants(prefix: string = 'ui'): Variants {
  return [
    variantPrimitives(prefix),
  ]
}
