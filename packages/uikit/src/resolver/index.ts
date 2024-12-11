import {
  COMPONENTS,
  COMPOSABLES,
  PREFIX,
} from './constants'

interface ResolverOptions {
  prefix?: string
}

export default function ComponentResolver(options: ResolverOptions = {}) {
  const {
    prefix = PREFIX,
  } = options

  return (name: string) => {
    // Components
    if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
      const componentName = name.substring(prefix.length)

      if (COMPONENTS.includes(componentName)) {
        return {
          name: componentName,
          from: '@xiaoshop/uikit',
        }
      }
    }

    // Composables
    if (COMPOSABLES.includes(name)) {
      return {
        name,
        from: '@xiaoshop/uikit',
      }
    }
  }
}
