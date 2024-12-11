import type { Preset } from 'unocss'

import { shortcuts } from './shortcuts'

export function presetUiKit(): Preset {
  return {
    name: '@xiaoshop/uikit',
    theme: {},
    rules: [],
    shortcuts,
  }
}
