import type { IContext, IContextCallback } from './context'
import type {
  NavigationGuard,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router'

export interface IDefineMiddlewareOptions {
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): ReturnType<NavigationGuard>
}

/**
 * 定义中间件
 *
 * @param middleware IDefineMiddlewareOptions
 * @returns IContextCallback
 */
export function defineMiddleware(middleware: IDefineMiddlewareOptions): IContextCallback {
  return ({ router }) => {
    router.beforeEach((to, from, next) => {
      if (!middleware(to, from, next))
        next()
    })
  }
}

/**
 * 安装中间件
 *
 * @param ctx IContext
 */
export function installMiddlewares(ctx: IContext): void {
  const middlewares = import.meta.glob<IContextCallback>('~/middleware/**/*.ts', {
    eager: true,
    import: 'default',
  })

  for (const install of Object.values(middlewares)) {
    install(ctx)
  }
}
