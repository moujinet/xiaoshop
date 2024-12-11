import type { IContext, IContextCallback } from './context'

import { ModuleMenuType } from './config'
import { useWorkspace } from './workspace'
import { useMetaData } from './metadata'
import { toDotId, toPath } from './utils'

export interface IModule {
  id: string
  name: string
  desc: string
  icon: string
  version: string
  sort: number
  menus?: IModuleMenu[]
}

export type IModuleDefinition = Omit<
  Partial<IModule>,
  | 'id'
  | 'name'
> & {
  id: string
  workspace: string
  name: string
  menus?: IModuleMenuDefinition[]
  setup?: (ctx: IContext) => Promise<void> | void
}

export interface IModuleMenu {
  id: string
  type: ModuleMenuType
  name: string
  path: string
  desc?: string
  icon?: string
  sort?: number
  hidden?: boolean
  children?: IModuleMenu[]
}

export type IModuleMenuDefinition = Omit<
  Partial<IModuleMenu>,
  | 'id'
  | 'name'
  | 'children'
> & {
  id: string
  name: string
  children?: IModuleMenuDefinition[]
}

export function defineModule(definition: IModuleDefinition): IContextCallback {
  if (!definition.id || !definition.id.trim())
    throw new Error('模块 ID 不能为空')

  if (!definition.name || !definition.name.trim())
    throw new Error('模块名称不能为空')

  if (!definition.workspace || !definition.workspace.trim())
    throw new Error('模块工作区不能为空')

  return async (ctx: IContext) => {
    const { getWorkspace } = useWorkspace()

    const workspace = getWorkspace(definition.workspace)

    if (!workspace)
      throw new Error(`工作区 "${definition.workspace}" 不存在`)

    if (workspace.modules?.some(m => m.id === definition.id))
      throw new Error(`模块 "${definition.id}" 已存在`)

    workspace.modules = workspace.modules || []

    const moduleId = `${definition.workspace}.${definition.id}`
    const module: IModule = {
      id: moduleId,
      name: definition.name,
      desc: definition.desc || '',
      icon: definition.icon || '',
      version: definition.version || '',
      sort: definition.sort || workspace.modules.length + 1,
    }

    const { setMetadata } = useMetaData()

    setMetadata({
      id: module.id,
      name: module.name,
      desc: module.desc,
      icon: module.icon,
      workspace: definition.workspace,
    })

    if (definition.menus && definition.menus.length) {
      module.menus = []

      definition.menus
        .sort((m1, m2) => (m1.sort || 99) - (m2.sort || 99))
        .forEach((menu) => {
          module.menus!.push(
            defineModuleMenu(menu, definition.workspace, moduleId, moduleId),
          )
        })
    }

    workspace.modules?.push(module)

    if (definition.setup)
      await definition.setup(ctx)
  }
}

export function installModules(ctx: IContext) {
  const modules = import.meta.glob<IContextCallback>('~/modules/**/install.ts', {
    eager: true,
    import: 'default',
  })

  for (const module of Object.values(modules))
    module(ctx)

  const { router, routes } = ctx
  const { extendRoutes } = useMetaData()

  extendRoutes(routes).forEach((route) => {
    router.addRoute(route)
  })
}

function defineModuleMenu(
  definition: IModuleMenuDefinition,
  workspaceId: string,
  moduleId: string,
  parentId: string,
): IModuleMenu {
  const menuId = toDotId(definition.id, parentId)
  const menuType = definition.type || getMenuType(definition)
  const menuPath = definition.path || menuId.includes('.') ? toPath(menuId) : ''

  const menu: IModuleMenu = {
    id: menuId,
    type: menuType,
    name: definition.name,
    desc: definition.desc,
    icon: definition.icon,
    path: menuPath,
    sort: definition.sort || 1,
    hidden: definition.hidden,
  }

  const { setMetadata } = useMetaData()

  setMetadata({
    id: menu.id,
    name: menu.name,
    desc: menu.desc,
    icon: menu.icon,
    workspace: workspaceId,
    module: moduleId,
  })

  if (definition.children && definition.children.length) {
    menu.children = []

    definition.children
      .sort((m1, m2) => (m1.sort || 99) - (m2.sort || 99))
      .forEach((children) => {
        menu.children!.push(
          defineModuleMenu(children, workspaceId, moduleId, menuId),
        )
      })
  }

  return menu
}

function getMenuType(definition: IModuleMenuDefinition): ModuleMenuType {
  if (definition.id === 'index')
    return ModuleMenuType.INDEX

  if (definition.id.startsWith('#'))
    return ModuleMenuType.ACTION

  if (definition.children && definition.children.length) {
    if (definition.children.some(m => m.id === 'index'))
      return ModuleMenuType.PAGE

    if (definition.children.filter(m => m.id.startsWith('#')).length === definition.children.length)
      return ModuleMenuType.PAGE

    return ModuleMenuType.GROUP
  }

  return ModuleMenuType.PAGE
}
