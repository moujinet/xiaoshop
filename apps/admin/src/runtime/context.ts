import type { App } from 'vue'
import type { Pinia } from 'pinia'
import type { Router, RouteRecordRaw } from 'vue-router'

import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import { installMiddlewares } from './middleware'
import { installPlugins } from './plugin'
import { installModules } from './module'

export interface IContext {
  app: App<Element>
  store: Pinia
  router: Router
  routes: Readonly<RouteRecordRaw[]>
}

export interface IContextCallback {
  (ctx: IContext): Promise<void> | void
}

export async function createAdminContext(
  app: App<Element>,
  store: Pinia,
  router: Router,
): Promise<IContext> {
  const context: IContext = {
    app,
    store,
    router,
    routes: setupLayouts(routes),
  }

  installPlugins(context)
  installMiddlewares(context)
  installModules(context)

  app.use(router)

  return context
}
