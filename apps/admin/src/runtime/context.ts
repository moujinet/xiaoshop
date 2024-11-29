import type { App } from 'vue'
import type { Pinia } from 'pinia'
import type { Router, RouteRecordRaw } from 'vue-router'

import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

import { installModules } from './module'
import { installPlugins } from './plugin'
import { installMiddlewares } from './middleware'

export interface IContext {
  app: App<Element>
  store: Pinia
  router: Router
  routes: Readonly<RouteRecordRaw[]>
}

export interface IContextCallback {
  (ctx: IContext): Promise<void> | void
}

export async function createContext(
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

  installModules(context)
  installPlugins(context)
  installMiddlewares(context)

  app.use(router)

  return context
}
