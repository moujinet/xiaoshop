import type { ILessVariables, IViteThemeTransformer } from '~/less-sitter/types'

import Debug from 'debug'
import { MODULE_ID } from '~/less-sitter/constants'

const debug = Debug(`${MODULE_ID}:arco:transform`)

const transformer: IViteThemeTransformer = (
  variables: ILessVariables,
  transformNames?: string[],
): ILessVariables => {
  const transformed: ILessVariables = {}

  for (const [name, value] of Object.entries(variables)) {
    transformed[name] = value

    if (transformNames?.includes(name)) {
      Object.assign(transformed, wrapper(name))
      debug(name)
    }
  }

  return transformed
}

function wrapper(color: string): ILessVariables {
  const wrapped: ILessVariables = {}

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

export default transformer
