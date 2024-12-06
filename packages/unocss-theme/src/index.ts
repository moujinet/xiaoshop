import type { Preset } from 'unocss'

import arco from './presets/arco'
import tdesign from './presets/tdesign'

interface IPresetThemeOptions {
  library: 'arco' | 'tdesign' | string
}

export function presetTheme(options: IPresetThemeOptions): Preset {
  const { library = 'arco' } = options

  const presets: Record<IPresetThemeOptions['library'], any> = {
    arco,
    tdesign,
  }

  return {
    name: '@xiaoshop/unocss-theme',
    ...presets[library],
  }
}
