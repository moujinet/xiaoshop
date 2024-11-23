import type { Preset } from 'unocss'
import { theme } from './theme'

export function presetArco(): Preset {
  return {
    name: '@xiaoshop/unocss-preset-arco',
    theme,
    autocomplete: {
      templates: [
        // theme inferring
        'bg-$color/<opacity>',
        'text-$color/<opacity>',
      ],
    },
  }
}
