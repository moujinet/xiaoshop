import type { IContext, IContextCallback } from './context'
import type {
  NavigationGuard,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router'

export interface IMiddlewareDefinition {
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): ReturnType<NavigationGuard>
}

export function defineMiddleware(middleware: IMiddlewareDefinition): IContextCallback {
  return ({ router }) => {
    router.beforeEach((to, from, next) => {
      if (!middleware(to, from, next))
        next()
    })
  }
}

export function installMiddlewares(ctx: IContext): void {
  const middlewares = import.meta.glob<IContextCallback>('~/middleware/**/*.ts', {
    eager: true,
    import: 'default',
  })

  for (const middleware of Object.values(middlewares)) {
    middleware(ctx)
  }
}
