import { defineConfig } from 'unocss'

import admin from './apps/admin/uno.config'
import docs from './docs/uno.config'

export default defineConfig({
  ...docs,
  ...admin,

  configDeps: [
    './apps/admin/uno.config.ts',
    './docs/uno.config.ts',
  ],
})
