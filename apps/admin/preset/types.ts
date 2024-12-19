import type {
  Preflight,
  Rule,
  PresetUnoTheme as Theme,
  UserShortcuts,
  Variant,
} from 'unocss'

type Rules = Rule<Theme>[]
type Shortcuts = UserShortcuts<Theme>
type Variants = Variant<Theme>[]
type Preflights = Preflight<Theme>[]

export type RGBColorString = `${number}, ${number}, ${number}`

export type { Preflight, Preflights, Rules, Shortcuts, Theme, Variants }
