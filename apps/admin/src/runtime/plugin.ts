import type { IContext, IContextCallback } from './context'

export interface IPluginDefinition {
  (ctx: IContext): void
}

export function definePlugin(plugin: IPluginDefinition): IContextCallback {
  return (ctx: IContext) => {
    plugin(ctx)
  }
}

export function installPlugins(ctx: IContext) {
  const plugins = import.meta.glob<IContextCallback>('~/plugins/**/install.ts', {
    eager: true,
    import: 'default',
  })

  for (const plugin of Object.values(plugins)) {
    plugin(ctx)
  }
}
