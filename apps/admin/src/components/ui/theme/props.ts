type UiThemeAppearance = 'auto' | 'light' | 'dark'
type UiThemeAccentColor = 'gray' | 'gold' | 'bronze' | 'brown' | 'yellow' | 'amber' | 'orange' | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'lime' | 'mint' | 'sky'
type UiThemeGrayColor = 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand'
type UiThemeRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'

export interface UiThemeIconSet {
  package?: string
  suffix?: string
  activeSuffix?: string
}

export interface UiThemeContext {
  appearance?: Ref<UiThemeAppearance | undefined>
  accentColor?: Ref<UiThemeAccentColor | undefined>
  grayColor?: Ref<UiThemeGrayColor | undefined>
  radius?: Ref<UiThemeRadius | undefined>
  iconSet?: Ref<UiThemeIconSet>
}

export interface UiThemeProps {
  appearance?: UiThemeAppearance
  accentColor?: UiThemeAccentColor
  grayColor?: UiThemeGrayColor
  radius?: UiThemeRadius
  iconSet?: UiThemeIconSet
}
