import type { App } from 'vue'
import type { Router } from 'vue-router'

export interface IContext {
  app: App
  router: Router
}

export interface IContextCallback<T = void> {
  (ctx: IContext): T
}
