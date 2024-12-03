export default defineModule({
  id: 'help',
  workspace: 'built-in',
  name: '帮助中心',
  icon: 'question',
  version: '1.0.0',
  sort: 999,
  menus: [
    {
      id: 'manual',
      name: '使用手册',
      icon: 'book-6',
      children: [
        { id: 'user', name: '用户手册' },
        { id: 'developer', name: '开发文档' },
      ],
    },
  ],
})
