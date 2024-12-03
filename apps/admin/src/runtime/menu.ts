import { dotId, toPath } from './utils'
import { useMetaData } from './metadata'

export enum ModuleMenuType {
  GROUP = 1,
  PAGE,
  ACTION,
  INDEX,
}

export interface IModuleMenuStoreDefinition {
  id: string
  type: ModuleMenuType
  module: string
  name: string
  path: string
  desc?: string
  icon?: string
  sort?: number
  hidden?: boolean
  children?: IModuleMenuStoreDefinition[]
}

export type IDefineModuleMenuOptions = Omit<
  Partial<IModuleMenuStoreDefinition>,
  | 'id'
  | 'module'
  | 'name'
  | 'children'
> & {
  id: string
  name: string

  children?: IDefineModuleMenuOptions[]
}

export type IModuleMenuBreadcrumb = Pick<
  IModuleMenuStoreDefinition,
  | 'id'
  | 'name'
  | 'path'
>

const _menus = new Map<string, IModuleMenuStoreDefinition[]>()

export const useModuleMenu = defineStore('menus', () => {
  /**
   * 模块菜单
   */
  const menus = ref<IModuleMenuStoreDefinition[]>([])

  const { setMetadata } = useMetaData()

  /**
   * 获取模块菜单
   *
   * @param moduleId 模块标识
   */
  function getMenus(moduleId: string): IModuleMenuStoreDefinition[] {
    if (!_menus.has(moduleId)) {
      const result = menus.value
        .filter(m => m.module === moduleId && !m.hidden)
        .sort((m1, m2) => (m1.sort || 0) - (m2.sort || 0))

      _menus.set(moduleId, result)
    }

    return _menus.get(moduleId)!
  }

  /**
   * 注册模块菜单
   *
   * @param moduleMenus 模块菜单定义
   * @param workspaceId 所属工作区 ID
   * @param moduleId 所属模块 ID
   */
  function register(
    moduleMenus: IDefineModuleMenuOptions[],
    workspaceId: string,
    moduleId: string,
  ) {
    if (!moduleMenus || !moduleMenus.length)
      return

    moduleMenus
      .sort((m1, m2) => (m1.sort || 0) - (m2.sort || 0))
      .forEach((m) => {
        menus.value.push(normalize(m, workspaceId, `${workspaceId}.${moduleId}`, `${workspaceId}.${moduleId}`))
      })
  }

  /**
   * 标准化模块菜单
   *
   * @param definition IDefineModuleMenuOptions
   * @param workspace string
   * @param module string
   * @param parentId string
   * @returns IModuleMenuStoreDefinition
   */
  function normalize(
    definition: IDefineModuleMenuOptions,
    workspace: string,
    module: string,
    parentId: string,
  ): IModuleMenuStoreDefinition {
    const menuId = dotId(definition.id, parentId)
    const menuType = definition.type || getMenuType(definition)
    const menuPath = definition.path || menuId.includes('.') ? toPath(menuId) : ''

    const menu: IModuleMenuStoreDefinition = {
      id: menuId,
      module,
      type: menuType,
      name: definition.name,
      desc: definition.desc,
      icon: definition.icon,
      path: menuPath,
      sort: definition.sort || 1,
      hidden: definition.hidden,
    }

    setMetadata({
      id: menu.id,
      name: menu.name,
      workspace,
      module,
    })

    if (definition.children && definition.children.length) {
      definition.children
        .sort((m1, m2) => (m1.sort || 0) - (m2.sort || 0))
        .forEach((children) => {
          if (!menu.children)
            menu.children = []

          menu.children.push(
            normalize(children, workspace, module, menuId),
          )
        })
    }

    return menu
  }

  /**
   * 获取菜单类型
   *
   * @param definition 模块菜单定义
   * @returns 菜单类型
   */
  function getMenuType(definition: IDefineModuleMenuOptions): ModuleMenuType {
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

  return {
    getMenus,
    register,
  }
})
