export type IUserMenuGroup = 'session' | 'extras' | 'help' | 'footer'

export interface IUserMenu {
  /**
   * 菜单唯一标识
   */
  key: string
  /**
   * 菜单图标
   */
  icon: string
  /**
   * 菜单名称
   */
  label: string
  /**
   * 菜单 URL
   */
  url?: string
  /**
   * 菜单类名
   */
  className?: string
}

export type IUserMenuGrouped = Record<
  IUserMenuGroup,
  IUserMenu[]
>

/**
 * 用户菜单
 */
export const useUserMenu = defineStore('usermenu', () => {
  /**
   * 用户菜单
   */
  const usermenus = ref<IUserMenuGrouped>({
    session: [
      { key: 'profile', icon: 'user-1', label: '个人资料', url: '/profile' },
      { key: 'appearance', icon: 'paint-brush', label: '显示设置', url: '/appearance' },
      { key: 'notifications', icon: 'notification', label: '消息设置', url: '/notifications' },
      { key: 'upgrade', icon: 'rocket', label: '体验专业版', url: '/upgrade' },
    ],
    extras: [],
    help: [
      { key: 'docs', icon: 'book-6', label: '帮助中心', url: 'https://github.com/moujinet/xiaoshop' },
      { key: 'feedback', icon: 'comment', label: '社区反馈', url: 'https://github.com/moujinet/xiaoshop/issues' },
    ],
    footer: [
      { key: 'logout', icon: 'exit', label: '安全退出', url: '/logout' },
    ],
  })

  /**
   * 注册用户菜单
   *
   * @param definitions
   */
  function register(...definitions: IUserMenu[]) {
    const extras = usermenus.value.extras

    for (const definition of definitions) {
      if (!extras.filter(m => m.key === definition.key).length)
        extras.push(definition)
      else
        console.warn(`用户菜单 ${definition.key} 已存在`)
    }
  }

  /**
   * 获取用户菜单 URL
   *
   * @param group 用户菜单分组
   * @param key 菜单标识
   * @returns 用户菜单 URL
   */
  function getUrl(group: IUserMenuGroup, key: string): string {
    return usermenus.value[group].find(m => m.key === key)?.url || ''
  }

  return {
    usermenus,
    register,
    getUrl,
  }
})
