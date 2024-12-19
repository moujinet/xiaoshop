import type { Preflights } from '../types'
import { appearance } from './appearance'

export function preflights(prefix: string = 'ui'): Preflights {
  return [
    ...appearance(prefix),
  ]
}
