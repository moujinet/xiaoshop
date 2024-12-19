import type { UiRgbColor } from './ui'

export interface IPreferences {
  /**
   * 主色
   *
   * @default ''
   */
  'interface.accent': UiRgbColor
  /**
   * 明暗模式
   *
   * @default 'auto'
   */
  'interface.colorSchema': 'light' | 'dark' | 'auto'
  /**
   * 颜色主题
   *
   * @default 'auto'
   */
  'interface.colorTheme': 'default'
  /**
   * 日期格式
   *
   * @default 'YYYY/mm/dd HH:MM'
   */
  'display.dateTimeFormat': 'YYYY/mm/dd HH:MM' | 'YYYY/mm/dd'
  /**
   * 显示友好时间
   *
   * @default true
   */
  'display.friendlyDateTime': boolean
  /**
   * 显示未读消息数量
   *
   * @default true
   */
  'notification.badge': boolean
  /**
   * 播放通知声音
   *
   * @default false
   */
  'notification.sound': boolean
  /**
   * 通知刷新间隔
   *
   * @default 15000
   */
  'notification.interval': 15000 | 30000 | 60000
}
