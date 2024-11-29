import type { IDefineModuleMenuOptions } from './menu'
import type { IContext, IContextCallback } from './context'

import { useModuleMenu } from './menu'
import { useMetaData } from './metadata'
import { useWorkspace } from './workspace'

export interface IModuleStoreDefinition {
  id: string
  name: string
  desc: string
  icon: string
  version: string
  sort: number
}

export type IDefineModuleOptions = Omit<
  Partial<IModuleStoreDefinition>,
  | 'id'
  | 'name'
> & {
  id: string
  workspace: string
  name: string
  menus?: IDefineModuleMenuOptions[]
  setup?: (ctx: IContext) => Promise<void> | void
}

/**
 * 定义模块
 */
export function defineModule(module: IDefineModuleOptions): IContextCallback {
  if (!module.id || !module.id.trim())
    throw new Error('模块 ID 不能为空')

  if (!module.name || !module.name.trim())
    throw new Error('模块名称不能为空')

  if (!module.workspace || !module.workspace.trim())
    throw new Error('模块工作区不能为空')

  return async (ctx: IContext) => {
    const { installModule } = useWorkspace()

    installModule(
      module.workspace.trim(),
      module,
    )

    if (module.menus && module.menus.length) {
      const moduleMenu = useModuleMenu()

      moduleMenu.register(
        module.menus,
        module.workspace.trim(),
        module.id,
      )
    }

    if (module.setup)
      await module.setup(ctx)
  }
}

/**
 * 安装模块
 */
export function installModules(ctx: IContext) {
  const modules = import.meta.glob<IContextCallback>('~/modules/**/install.ts', {
    eager: true,
    import: 'default',
  })

  for (const install of Object.values(modules)) {
    install(ctx)
  }

  const { router, routes } = ctx
  const { extendRoutesMeta } = useMetaData()

  extendRoutesMeta(routes).forEach((route) => {
    router.addRoute(route)
  })
}
