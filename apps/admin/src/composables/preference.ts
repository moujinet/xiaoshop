import type { IPreferences } from '~/types/preference'

import { useDark, usePreferredDark, useSessionStorage, useToggle } from '@vueuse/core'
import { DEFAULT_PREFERENCES } from '~/config/defaults'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()

export function useUserPreferences() {
  return useSessionStorage('preferences', DEFAULT_PREFERENCES)
}

export function usePreference<K extends keyof IPreferences>(key: K): Ref<IPreferences[K]> {
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

export function togglePreference(key: keyof IPreferences) {
  const flag = usePreference(key)
  flag.value = !flag.value
}
