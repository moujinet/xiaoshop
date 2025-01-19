import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

const projectRootDir = resolve(__dirname)

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    UnoCSS(),
    Dts({
      tsconfigPath: 'tsconfig.json',
      cleanVueFileName: true,
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(projectRootDir, 'src/'),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(projectRootDir, 'src/index.ts'),
        resolver: resolve(projectRootDir, 'src/resolver/index.ts'),
      },
      name: 'uikit',
    },
    rollupOptions: {
      external: [
        'vue',
        'clsx',
        'tailwind-merge',
        'es-toolkit/object',
        'class-variance-authority',
        'unplugin-vue-components',
        'radix-vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
