import type { UserConfig } from 'vite'

import type { Variables } from './types'
import Debug from 'debug'
import { MODULE_ID } from './constants'
import { parseLessVariables } from './parser'
import { transformThemeColors } from './transform'
import { readFileContent } from './utils'

const debug = Debug(`${MODULE_ID}:imports`)

export function modifyLessVars(config: UserConfig, imports: string[], simplify?: boolean): void {
  const vars: Variables = {}

  for (const importPath of imports) {
    const less = readFileContent(importPath)

    if (less) {
      const variables = parseLessVariables(less)

      Object.assign(
        vars,
        simplify ? transformThemeColors(variables) : variables,
      )

      debug(importPath, vars)
    }
    else {
      debug(importPath, 'not found')
    }
  }

  config.css = config.css || {}
  config.css.preprocessorOptions = config.css.preprocessorOptions || {}

  const { preprocessorOptions } = config.css

  preprocessorOptions.less = preprocessorOptions.less || {}
  preprocessorOptions.less.modifyVars = vars
  preprocessorOptions.less.javascriptEnabled = true
}
