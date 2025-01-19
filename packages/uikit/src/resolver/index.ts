import type { ComponentResolver } from 'unplugin-vue-components'
import { components } from './components'

export interface ResolverOptions {
  /**
   * @default 'Ui'
   */
  prefix?: string
}

export function uikitResolver(options: ResolverOptions = {}): ComponentResolver {
  const { prefix = 'Ui' } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
        const componentName = name.substring(prefix.length)
        if (Object.values(components).flat().includes(componentName)) {
          return {
            name: componentName,
            from: '@xiaoshop/uikit',
          }
        }
      }
    },
  }
}
