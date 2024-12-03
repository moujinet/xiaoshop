export default defineModule({
  id: 'system',
  workspace: 'manage',
  name: '系统信息',
  icon: 'information',
  version: '1.0.0',
  sort: 999,
  menus: [
    {
      id: 'server',
      name: '系统信息',
      icon: 'tv-1',
      children: [
        {
          id: 'overview',
          name: '系统概况',
        },
        {
          id: 'modules',
          name: '模块插件',
        },
      ],
    },
    {
      id: 'service',
      name: '服务信息',
      icon: 'server-2',
      children: [
        {
          id: 'queue',
          name: '任务队列',
        },
        {
          id: 'scheduler',
          name: '计划任务',
        },
      ],
    },
  ],
})
