import type { UserConfig } from 'vite'

import getVars, { type Variables } from 'css-preprocessor-variables'
import Debug from 'debug'
import { MODULE_ID } from './constants'
import { readFileContent } from './utils'

const debug = {
  import: Debug(`${MODULE_ID}:imports`),
}

export async function modifyLessVars(config: UserConfig, imports: string[]): Promise<void> {
  const vars: Variables = {}

  for (const importPath of imports) {
    const less = readFileContent(importPath)

    if (less) {
      const { variables } = await getVars(less, {
        type: 'less',
        transform: true,
      })

      Object.assign(vars, variables)

      debug.import(importPath, variables)
    }
    else {
      debug.import(importPath, 'not found')
    }
  }

  config.css = {
    ...config.css,
    preprocessorOptions: {
      less: {
        ...config.css?.preprocessorOptions?.less,
        modifyVars: vars,
        javascriptEnabled: true,
      },
    },
  }
}
