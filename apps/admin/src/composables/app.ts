import type { IModuleStoreDefinition } from '#/module'
import type { IModuleMenuStoreDefinition } from '#/menu'
import type { IWorkspaceStoreDefinition } from '#/workspace'

export type IUserMenuGroup = 'session' | 'extras' | 'help' | 'footer'

export interface IUserMenuItem {
  key: string
  icon: string
  label: string
  url?: string
  className?: string
}

export type IUserMenu = Record<
  IUserMenuGroup,
  IUserMenuItem[]
>

/**
 * 应用上下文
 */
export const useApp = defineStore('app', () => {
  /**
   * 当前空间
   */
  const workspace = ref<IWorkspaceStoreDefinition | null>(null)
  /**
   * 当前模块
   */
  const module = ref<IModuleStoreDefinition | null>(null)
  /**
   * 用户菜单
   */
  const usermenus = ref<IUserMenu>({
    session: [
      { key: 'profile', icon: 'user-1', label: '个人资料', url: '/profile' },
      { key: 'appearance', icon: 'paint-brush', label: '偏好设置', url: '/appearance' },
      { key: 'notifications', icon: 'notification', label: '消息设置', url: '/notifications' },
      { key: 'upgrade', icon: 'rocket', label: '体验专业版', url: '/upgrade' },
    ],
    extras: [],
    help: [
      { key: 'docs', icon: 'book-6', label: '帮助中心', url: '/help' },
      { key: 'feedback', icon: 'comment', label: '社区反馈', url: 'https://github.com/moujinet/xiaoshop/issues' },
    ],
    footer: [
      { key: 'logout', icon: 'exit', label: '安全退出', url: '/logout' },
    ],
  })

  /**
   * 当前空间模块
   */
  const modules = computed<IModuleStoreDefinition[]>(
    () => (workspace.value?.modules || []).sort((a, b) => a.sort - b.sort),
  )

  /**
   * 当前模块菜单
   */
  const moduleMenus = computed<IModuleMenuStoreDefinition[]>(
    () => useModuleMenu().getMenus(module.value?.id || ''),
  )

  /**
   * 获取当前空间的首个模块标识
   *
   * @returns string
   */
  function getLeadModuleId() {
    return modules.value.length ? modules.value[0].id : ''
  }

  /**
   * 设置当前空间
   *
   * @param wsId 空间标识
   */
  function setWorkspace(wsId?: string) {
    if (!workspace.value || wsId !== workspace.value.id) {
      workspace.value = useWorkspace().find(wsId || 'shop') || null
    }
  }

  /**
   * 设置当前模块
   *
   * @param moduleId 模块标识
   */
  function setModule(moduleId?: string) {
    module.value = workspace.value?.modules.find(m => m.id === moduleId) || null
  }

  /**
   * 设置当前空间模块
   *
   * @param spaceId 空间标识
   * @param moduleId 模块标识
   */
  function setWorkspaceModule(spaceId?: string, moduleId?: string) {
    setWorkspace(spaceId)
    setModule(moduleId || getLeadModuleId())
  }

  return {
    workspace: computed(() => workspace.value),
    workspaceId: computed(() => workspace.value?.id),
    module: computed(() => module.value),
    moduleId: computed(() => module.value?.id),
    modules,
    moduleMenus,
    usermenus: computed(() => usermenus.value),
    setWorkspaceModule,
    setWorkspace,
    setModule,
  }
})
