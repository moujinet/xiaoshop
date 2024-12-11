import { defineConfig } from 'unocss'

import admin from './apps/admin/uno.config'

export default defineConfig({
  ...admin,

  configDeps: [
    './apps/admin/uno.config.ts',
    './packages/uikit/src/unocss.ts',
  ],
})
