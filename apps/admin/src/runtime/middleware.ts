import type {
  IContext,
  IContextCallback,
} from '~/runtime/context'
import type {
  NavigationGuard,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router'

export interface IMiddleware {
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): ReturnType<NavigationGuard>
}

export type IMiddlewareInstaller = IContextCallback

/**
 * 定义中间件
 *
 * @param middleware IMiddleware
 * @returns IMiddlewareInstaller
 */
export function defineMiddleware(middleware: IMiddleware): IMiddlewareInstaller {
  return ({ router }) => {
    router.beforeEach((to, from, next) => {
      if (!middleware(to, from, next))
        next()
    })
  }
}

/**
 * 加载中间件
 *
 * @param ctx IContext
 */
export function loadMiddlewares(ctx: IContext): void {
  const middlewares = import.meta.glob<IMiddlewareInstaller>('~/middleware/**/*.ts', {
    eager: true,
    import: 'default',
  })

  for (const middleware of Object.values(middlewares)) {
    middleware(ctx)
  }
}
