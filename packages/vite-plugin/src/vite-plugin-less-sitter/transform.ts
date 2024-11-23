import type { Variables } from './types'
import Debug from 'debug'
import { MODULE_ID } from './constants'

const debug = Debug(`${MODULE_ID}:transform`)
const arcoColors: string[] = ['primary']

export function transformThemeColors(vars: Variables): Variables {
  const transformed: Variables = {}

  for (const [key, value] of Object.entries(vars)) {
    transformed[key] = value

    if (arcoColors.includes(key)) {
      const wrapped = wrapperToThemeColor(key)
      Object.assign(transformed, wrapped)

      debug(key, wrapped)
    }
  }

  return transformed
}

function wrapperToThemeColor(color: string): Variables {
  const wrapped: Variables = {}

  for (let i = 1; i <= 10; i++) {
    if (i === 6)
      wrapped[`${color}-${i}`] = `rgb(get-rgb-str(@${color}))`
    else
      wrapped[`${color}-${i}`] = `rgb(get-rgb-str(color-palette(@${color}, ${i})))`
  }

  // Dark
  for (let i = 1; i <= 10; i++) {
    wrapped[`dark-${color}-${i}`] = `rgb(get-rgb-str(color-palette-dark(@${color}, ${i})))`
  }

  return wrapped
}
