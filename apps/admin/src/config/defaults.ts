import type { UiThemeIconSet } from '~/components/ui/theme/props'
import type { IPreferences } from '~/types/preference'

// --------------------------------------------------------
// 预设相关
// --------------------------------------------------------

export const DEFAULT_PREFERENCES: IPreferences = {
  'interface.accent': '',
  'interface.colorSchema': 'light',
  'interface.colorTheme': 'default',
  'display.dateTimeFormat': 'YYYY/mm/dd HH:MM',
  'display.friendlyDateTime': false,
  'notification.badge': false,
  'notification.sound': false,
  'notification.interval': 15000,
}

// --------------------------------------------------------
// 图标相关
// --------------------------------------------------------

export const DEFAULT_ICON_SET: UiThemeIconSet = {
  package: 'mingcute',
  suffix: '-line',
  activeSuffix: '-fill',
}
