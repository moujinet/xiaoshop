import type { Plugin, UserConfig } from 'vite'
import type { IViteLessSitterOptions } from './types'

import { MODULE_ID } from './constants'
import { modifyLessVars } from './less'

function ViteLessSitter(options: IViteLessSitterOptions): Plugin {
  const {
    imports = [],
  } = options

  return {
    name: MODULE_ID,

    async config(config: UserConfig) {
      await modifyLessVars(config, imports)
    },
  }
}

export default ViteLessSitter
