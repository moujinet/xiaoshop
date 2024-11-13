import type { IContext } from './context'

import { createHead } from '@unhead/vue'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'

/**
 * 创建 Admin
 *
 * @param App
 * @param onReady
 */
export function createAdminClient(App: Component, onReady?: () => void): void {
  /**
   * 创建上下文
   */
  async function createContext(): Promise<IContext> {
    const app = createApp(App)
    const pinia = createPinia()
    const head = createHead()

    app.use(pinia)
    app.use(head)

    onReady?.()

    loadModules()

    const router = createRouter({
      routes: setupLayouts(routes),
      history: createWebHistory(import.meta.env.BASE_URL),
      scrollBehavior: () => ({
        left: 0,
        top: 0,
      }),
    })

    app.use(router)

    const ctx: IContext = {
      app,
      router,
    }

    loadPlugins(ctx)
    loadMiddlewares(ctx)

    return ctx
  }

  ;(async () => {
    const ctx = await createContext()
    await ctx.router.isReady()

    ctx.app.mount('#app')
  })()
}
