import type { Plugin, UserConfig } from 'vite'
import type { ILessVariables, IViteThemePluginOptions, IViteThemeTransformer } from './types'

import Debug from 'debug'
import { DEFAULT_TRANSFORM_NAMES, MODULE_ID } from './constants'
import { loadLessVariables } from './loader'

import arco from './providers/arco'

const debug = Debug(`${MODULE_ID}:imports`)

export function ViteThemePlugin(options: IViteThemePluginOptions): Plugin {
  const {
    imports = [],
    transformer: transformerName,
    transformNames = [],
  } = options

  const transformers = {
    arco,
  }

  return {
    name: MODULE_ID,

    async config(config: UserConfig) {
      const modifyVars: ILessVariables = {}

      if (imports.length === 0)
        return

      for (const lessFile of imports) {
        const variables = loadLessVariables(lessFile)

        if (variables) {
          if (!transformerName) {
            Object.assign(modifyVars, variables)
          }
          else {
            const transformer: IViteThemeTransformer = transformers[transformerName]
            const transformed = transformer(variables, transformNames.concat(DEFAULT_TRANSFORM_NAMES))

            Object.assign(modifyVars, transformed)

            debug('transformer', transformerName, modifyVars)
          }

          debug(lessFile, variables)
        }
        else {
          debug(lessFile, 'not found')
        }
      }

      config.css = config.css || {}
      config.css.preprocessorOptions = config.css.preprocessorOptions || {}

      const { preprocessorOptions } = config.css

      preprocessorOptions.less = preprocessorOptions.less || {}
      preprocessorOptions.less.modifyVars = modifyVars
      preprocessorOptions.less.javascriptEnabled = true
    },
  }
}
