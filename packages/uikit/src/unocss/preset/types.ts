import type {
  PresetUnoTheme as Theme,
  UserShortcuts,
} from 'unocss'

type Shortcuts = UserShortcuts<Theme>

export { Shortcuts, Theme }
