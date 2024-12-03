export default defineModule({
  id: 'settings',
  workspace: 'manage',
  name: '设置',
  desc: '系统设置',
  icon: 'settings-3',
  version: '1.0.0',
  sort: 99,
  menus: [
    {
      id: 'store',
      name: '店铺设置',
      icon: 'store-2',
      children: [
        { id: 'info', name: '店铺信息' },
        { id: 'contact', name: '联系方式' },
        { id: 'address', name: '地址信息' },
      ],
    },
    {
      id: 'notification',
      name: '消息通知',
      icon: 'chat-4',
      children: [
        { id: 'template', name: '消息模板' },
        { id: 'log', name: '发送记录' },
        { id: 'settings', name: '接口设置' },
      ],
    },
    {
      id: 'payment',
      name: '支付设置',
      icon: 'bank-card',
      children: [
        { id: 'balance', name: '余额支付' },
        { id: 'wepay', name: '微信钱包' },
        { id: 'alipay', name: '支付宝' },
      ],
    },
    {
      id: 'delivery',
      name: '发货设置',
      icon: 'truck',
      children: [
        { id: 'template', name: '运费模板' },
        { id: 'express', name: '快递公司' },
        { id: 'tracking', name: '物流跟踪' },
        { id: 'pickup', name: '自提设置' },
      ],
    },
    {
      id: 'service',
      name: '客服设置',
      icon: 'service',
      children: [
        { id: 'robot', name: '客服机器人' },
      ],
    },
    {
      id: 'others',
      name: '其他设置',
      icon: 'more-3',
      children: [
        { id: 'map', name: '地图设置' },
        { id: 'verify', name: '验证码设置' },
        { id: 'clawer', name: '数据采集设置' },
      ],
    },
  ],
  setup: () => {
    // const { registerCommand } = useLauncherCommands()

    // registerCommand({
    //   id: 'manage.settings',
    //   label: '系统设置',
    //   icon: 'settings-3',
    //   shortcuts: ['meta', '.'],
    //   href: '/settings',
    // })
  },
})
