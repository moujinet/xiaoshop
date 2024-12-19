import type { UiIconSet } from '~/types/ui'
import type { UiThemeContext } from '~/components/ui/theme/props'
import { DEFAULT_ICON_SET } from '~/config/defaults'
import { createContext } from 'radix-vue'

const [
  useTheme,
  provideThemeContext,
] = createContext<UiThemeContext>('Theme')

export {
  provideThemeContext,
  useTheme,
}

export function useIcon(iconSet?: Ref<UiIconSet>) {
  const context = useTheme({
    iconSet: ref(DEFAULT_ICON_SET),
  })

  return computed(
    () => iconSet?.value || context.iconSet?.value || DEFAULT_ICON_SET,
  )
}
