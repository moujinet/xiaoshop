import type { UserConfig } from 'vite'

import type { Variables } from './types'
import Debug from 'debug'
import { MODULE_ID } from './constants'
import { parseLessVariables } from './parser'
import { readFileContent } from './utils'

const debug = {
  import: Debug(`${MODULE_ID}:imports`),
}

export function modifyLessVars(config: UserConfig, imports: string[]): void {
  const vars: Variables = {}

  for (const importPath of imports) {
    const less = readFileContent(importPath)

    if (less) {
      const variables = parseLessVariables(less)
      Object.assign(vars, variables)
      debug.import(importPath, variables)
    }
    else {
      debug.import(importPath, 'not found')
    }
  }

  config.css = config.css || {}
  config.css.preprocessorOptions = config.css.preprocessorOptions || {}

  const { preprocessorOptions } = config.css

  preprocessorOptions.less = preprocessorOptions.less || {}
  preprocessorOptions.less.modifyVars = vars
  preprocessorOptions.less.javascriptEnabled = true
}
