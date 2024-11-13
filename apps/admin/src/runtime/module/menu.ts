export type IModuleMenuType = 'group' | 'page' | 'action' | 'index' | 'link'

export interface IModuleMenu {
  id: string
  parent: string
  space: string
  module: string
  type: IModuleMenuType
  name: string
  desc: string
  icon: string
  path: string
  sort: number
  hidden?: boolean
  children?: IModuleMenu[]
}

export type IModuleMenuDefinition = Omit<
  Partial<IModuleMenu>,
  | 'id'
  | 'parent'
  | 'space'
  | 'module'
  | 'name'
  | 'children'
> & {
  id: string
  name: string

  children?: IModuleMenuDefinition[]
}

/**
 * 模块菜单
 */
export const useModuleMenu = defineStore('menu', () => {
  /**
   * 菜单
   */
  const menus = ref<IModuleMenu[]>([])

  /**
   * 元数据
   */
  const metadata = useMetaData()

  /**
   * 载入模块菜单
   *
   * @param moduleMenus 模块菜单定义
   * @param space 所属空间 ID
   * @param module 所属模块 ID
   */
  function load(
    moduleMenus: IModuleMenuDefinition[],
    space: string,
    module: string,
  ) {
    if (!moduleMenus || !moduleMenus.length)
      return

    moduleMenus
      .sort((a, b) => (a.sort || 0) - (b.sort || 0))
      .forEach((menu) => {
        menus.value.push(normalize(menu, space, module, ''))
      })
  }

  /**
   * 标准化菜单
   *
   * @param definition 模块菜单定义
   * @param space 所属空间 ID
   * @param module 所属模块 ID
   * @param parent 上级菜单 ID
   */
  function normalize(
    definition: IModuleMenuDefinition,
    space: string,
    module: string,
    parent: string,
  ) {
    const menuId = toFullId(definition.id, parent)
    const menuType = definition.type || getMenuType(definition)
    const menuPath = definition.path || getMenuPath(definition, menuId)

    const newMenu: IModuleMenu = {
      id: menuId,
      parent: parent || module,
      space,
      module,
      type: menuType,
      name: definition.name,
      desc: definition.desc || '',
      icon: definition.icon || '',
      path: menuPath,
      sort: definition.sort || 1,
      hidden: definition.hidden !== undefined ? definition.hidden : false,
    }

    metadata.push({
      id: newMenu.id,
      space,
      module,
      name: newMenu.name,
    })

    if (definition.children && definition.children.length) {
      definition.children
        .sort((a, b) => (a.sort || 0) - (b.sort || 0))
        .forEach((children) => {
          if (!newMenu.children)
            newMenu.children = []

          newMenu.children.push(
            normalize(children, space, module, menuId),
          )
        })
    }

    return newMenu
  }

  /**
   * 归一化菜单 ID
   *
   * @param id 菜单 ID
   * @param parent 父菜单 ID
   * @returns 菜单完整 ID
   */
  function toFullId(id: string, parent?: string) {
    const fullId = parent ? `${parent}.${id}` : id

    return fullId
      .replace(/#/, '')
      .replace(/\.index$/, '')
  }

  /**
   * 获取菜单路径
   *
   * @param id 菜单 ID
   * @returns 菜单路径
   */
  function toPath(id: string) {
    const paths = id.split('.')

    if (paths[paths.length - 1] === 'index')
      paths.pop()

    return `/${paths.splice(1).join('/')}`
  }

  /**
   * 获取菜单类型
   *
   * @param definition 模块菜单定义
   * @returns 菜单类型
   */
  function getMenuType(definition: IModuleMenuDefinition): IModuleMenuType {
    if (definition.id === 'index')
      return 'index'

    if (definition.id.startsWith('#'))
      return 'action'

    if (definition.id.search(/^(http|s):\/\//))
      return 'link'

    if (definition.children && definition.children.length) {
      if (definition.children.some(c => c.id === 'index'))
        return 'page'

      if (definition.children.filter(c => c.id.startsWith('#')).length === definition.children.length)
        return 'page'

      return 'group'
    }

    return 'page'
  }

  /**
   * 获取菜单路径
   *
   * @param definition 模块菜单定义
   * @param menuId 模块菜单 ID
   * @returns 菜单路径
   */
  function getMenuPath(definition: IModuleMenuDefinition, menuId: string): string {
    if (definition.path)
      return definition.path

    return menuId.includes('.') ? toPath(menuId) : ``
  }

  return {
    menus: computed(
      () => menus.value.sort(
        (a, b) => a.sort - b.sort,
      ),
    ),
    load,
  }
})
