import type { ConfigEnv, PluginOption, UserConfig } from 'vite'

import path from 'node:path'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Layouts from 'vite-plugin-vue-layouts'
import SvgLoader from 'vite-svg-loader'
import Inspect from 'vite-plugin-inspect'

import { loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { unheadVueComposablesImports } from '@unhead/vue'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { ViteLessSitter } from '@xiaoshop/vite-plugin'

const plugins: PluginOption[] = [
  Vue(),

  VueJsx(),

  // https://github.com/vue-macros/vue-macros/tree/main/packages/define-options
  DefineOptions(),

  // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
  Layouts({
    layoutsDirs: 'src/layouts',
  }),

  // https://github.com/posva/unplugin-vue-router
  VueRouter({
    dts: 'src/typed-router.d.ts',
    routesFolder: [
      'src/pages',
      {
        src: 'src/modules',
        filePatterns: '**/pages/**/*',
        path: (file) => {
          const prefix = 'src/modules'
          return `${file.slice(file.lastIndexOf(prefix) + prefix.length + 1).replace('/pages', '')}`
        },
      },
    ],
    exclude: ['**/components/**'],
  }),

  // https://github.com/unplugin/unplugin-auto-import
  AutoImport({
    dirs: [
      'src/composables',
      'src/runtime/**',
      'src/utils',
      'src/modules/**/apis',
    ],
    imports: [
      'vue',
      'pinia',
      {
        '@arco-design/web-vue': [
          ['Modal', 'ArcoModal'],
          ['Message', 'ArcoMessage'],
          ['Notification', 'ArcoNotification'],
        ],
        'alova/client': ['useRequest'],
      },
      VueRouterAutoImports,
      unheadVueComposablesImports,
    ],
    dts: 'src/auto-imports.d.ts',
    resolvers: [
      ArcoResolver(),
    ],
    vueTemplate: true,
    injectAtEnd: false,
  }),

  // https://github.com/unplugin/unplugin-vue-components
  VueComponents({
    dts: 'src/vue-components.d.ts',
    dirs: ['src/components'],
    directoryAsNamespace: true,
    collapseSamePrefixes: true,
    extensions: ['vue'],
    types: [
      {
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      },
    ],
    resolvers: [
      IconsResolver({
        componentPrefix: 'icon',
        customCollections: ['empty', 'brand'],
      }),
      ArcoResolver({
        importStyle: 'less',
        sideEffect: true,
      }),
    ],
  }),

  // https://github.com/unocss/unocss
  UnoCSS(),

  // https://github.com/unplugin/unplugin-icons
  Icons({
    compiler: 'vue3',
    autoInstall: true,
    customCollections: {
      empty: FileSystemIconLoader(
        './src/assets/empty',
      ),
      brand: FileSystemIconLoader(
        './src/assets/brand',
      ),
    },
  }),

  // https://github.com/jpkleemans/vite-svg-loader
  SvgLoader({
    defaultImport: 'component',
    svgoConfig: {
      multipass: true,
    },
  }),

  // packages/vite-plugin-less-sitter
  ViteLessSitter({
    imports: [
      './src/styles/theme/_override/accent.less',
      './src/styles/theme/_override/light.less',
      './src/styles/theme/_override/dark.less',
    ],
    simplify: true,
  }),
]

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const {
    VITE_BASE_URL,
    VITE_APP_NAME,
    VITE_APP_NAME_SHORT,
  } = loadEnv(mode, root)

  return {
    base: VITE_BASE_URL,

    build: {
      target: 'es2015',
      sourcemap: true,
    },

    resolve: {
      alias: {
        '@': `${path.resolve(__dirname, 'src/modules')}/`,
        '#': `${path.resolve(__dirname, 'src/runtime')}/`,
        '~': `${path.resolve(__dirname, 'src')}/`,
        '~~': `${path.resolve(__dirname)}/`,
      },
    },

    server: {
      host: true,
      port: 3000,
    },

    esbuild: {
      pure: mode === 'production' ? ['console.log', 'debugger'] : [],
    },

    optimizeDeps: {
      include: [
        '@arco-design/web-vue',
      ],
    },

    plugins: [
      ...plugins,

      // https://github.com/antfu-collective/vite-plugin-inspect
      Inspect({
        dev: mode === 'development',
      }),

      // https://github.com/antfu/vite-plugin-pwa
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'android-chrome-512x512.png',
          'android-chrome-192x192.png',
          'safari-pinned-tab.svg',
          'favicon.ico',
        ],
        manifest: {
          name: VITE_APP_NAME,
          short_name: VITE_APP_NAME_SHORT,
          theme_color: '#0055ff',
          icons: [
            {
              src: '/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
    ],
  }
}
