export type AccentColorName =
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'brown'
  | 'bronze'
  | 'gold'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'lime'
  | 'mint'
  | 'sky'

export type GrayColorName =
  | 'gray'
  | 'mauve'
  | 'slate'
  | 'sage'
  | 'olive'
  | 'sand'

export type ColorName = AccentColorName | GrayColorName | 'white' | 'black' | 'neutral'

export type CssVar = `var(--${string})`

export type HexColor = `#${string}`

export type CssVarColor = `--${NamedColor}`

export type NamedColor = AccentColorName | GrayColorName
