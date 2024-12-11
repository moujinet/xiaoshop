import type { Plugin } from 'vue'
import * as components from './components'
import { PREFIX } from './resolver/constants'
import { pascalCase } from 'es-toolkit/string'

export * from './components'
export * from './composables'

const install: Plugin = {
  install(app, options = {}) {
    const {
      prefix = PREFIX,
    } = options

    for (const key of Object.keys(components)) {
      const componentName = pascalCase(prefix) + pascalCase(key)
      app.component(componentName, components[key as keyof typeof components])
    }
  },
}

export default install
