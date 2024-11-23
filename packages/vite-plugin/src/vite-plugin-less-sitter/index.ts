import type { Plugin, UserConfig } from 'vite'
import type { IViteLessSitterOptions } from './types'

import { MODULE_ID } from './constants'
import { modifyLessVars } from './less'

export function ViteLessSitter(options: IViteLessSitterOptions): Plugin {
  const {
    imports = [],
  } = options

  return {
    name: MODULE_ID,

    async config(config: UserConfig) {
      modifyLessVars(config, imports)
    },
  }
}
