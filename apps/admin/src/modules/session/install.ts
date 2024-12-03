export default defineModule({
  id: 'session',
  workspace: 'built-in',
  name: '个人中心',
  icon: 'user-4',
  version: '1.0.0',
  sort: 99,
  menus: [
    {
      id: 'account',
      name: '基本设置',
      icon: 'user-1',
      children: [
        { id: 'profile', name: '个人资料', desc: 'Public Profile', path: '/profile' },
        { id: 'password', name: '修改密码', path: '/password' },
      ],
    },
    {
      id: 'notifications',
      name: '消息通知',
      icon: 'notification',
      children: [
        { id: 'inbox', name: '我的消息', path: '/notifications' },
        { id: 'settings', name: '消息设置', path: '/notifications/settings' },
      ],
    },
    {
      id: 'security',
      name: '安全设置',
      icon: 'safety-certificate',
      children: [
        { id: 'logs', name: '操作日志', path: '/security/logs' },
        { id: 'sessions', name: '登录历史', path: '/security/sessions' },
      ],
    },
    {
      id: 'preferences',
      name: '偏好设置',
      icon: 'settings-5',
      children: [
        { id: 'appearance', name: '显示设置', path: '/appearance' },
        { id: 'shortcuts', name: '快捷键', path: '/shortcuts' },
      ],
    },
  ],
})
