import type { Preset } from 'unocss'

import arco from './presets/arco'

interface IPresetThemeOptions {
  library: 'arco' | string
}

export function presetTheme(options: IPresetThemeOptions): Preset {
  const { library = 'arco' } = options

  const presets: Record<IPresetThemeOptions['library'], any> = {
    arco,
  }

  return {
    name: '@xiaoshop/plugin-theme-unocss',
    ...presets[library],
  }
}
