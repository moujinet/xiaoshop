import type {
  Preflight,
  PresetUnoTheme as Theme,
  Rule as UnoRule,
  UserShortcuts,
  Variant,
} from 'unocss'

type Rule = UnoRule<Theme>
type Shortcuts = UserShortcuts<Theme>
type Variants = Variant<Theme>[]
type Preflights = Preflight<Theme>[]

export type { Preflight, Preflights, Rule, Shortcuts, Theme, Variants }
