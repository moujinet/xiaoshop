import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCss(),
  ],
  resolve: {
    alias: {
      '@xiaoshop/uikit': path.resolve(__dirname, '../src'),
    },
  },
})
