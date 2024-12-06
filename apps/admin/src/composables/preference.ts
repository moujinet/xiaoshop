import { useDark, useSessionStorage, useToggle } from '@vueuse/core'

import {
  DEFAULT_PREFERENCE_ACCENT,
  DEFAULT_PREFERENCE_COLLAPSE_ACTIVITY,
  DEFAULT_PREFERENCE_SHOW_BADGE,
  DEFAULT_PREFERENCE_THEME_COLOR,
  DEFAULT_PREFERENCE_THEME_MODE,
} from '~/constants/defaults'

interface IUsePreferenceState {
  /**
   * 主题色
   */
  accent: string
  /**
   * 模式
   */
  themeMode: 'light' | 'dark' | 'auto'
  /**
   * 主题色
   */
  themeColor: string
  /**
   * 更新数据时，是否显示小红点
   */
  showBadge: boolean
  /**
   * 是否折叠活动面板
   */
  collapseActivity: boolean
}

export const isDark = useDark({
  attribute: 'theme-mode',
  storageKey: 'theme-mode',
})

export const toggleDark = useToggle(isDark)

export function useUserPreferences() {
  return useSessionStorage<IUsePreferenceState>('session.preference', {
    accent: DEFAULT_PREFERENCE_ACCENT,
    themeMode: DEFAULT_PREFERENCE_THEME_MODE,
    themeColor: DEFAULT_PREFERENCE_THEME_COLOR,
    showBadge: DEFAULT_PREFERENCE_SHOW_BADGE,
    collapseActivity: DEFAULT_PREFERENCE_COLLAPSE_ACTIVITY,
  })
}

export function usePreference<K extends keyof IUsePreferenceState>(key: K): Ref<IUsePreferenceState[K]> {
  const preferences = useUserPreferences()

  return computed({
    get() {
      return preferences.value[key]
    },
    set(newValue) {
      preferences.value[key] = newValue
    },
  })
}
