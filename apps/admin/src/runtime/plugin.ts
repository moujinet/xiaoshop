import type {
  IContext,
  IContextCallback,
} from '~/runtime/context'

export type IPlugin = IContextCallback

export type IPluginInstaller = IContextCallback

/**
 * 定义插件
 *
 * @param plugin IPlugin
 * @returns IPluginInstaller
 */
export function definePlugin(plugin: IPlugin): IPluginInstaller {
  return (ctx: IContext) => plugin(ctx)
}

/**
 * 加载插件
 *
 * @param ctx IContext
 */
export function loadPlugins(ctx: IContext): void {
  const plugins = import.meta.glob<IPluginInstaller>('~/plugins/**/install.ts', {
    eager: true,
    import: 'default',
  })

  for (const middleware of Object.values(plugins)) {
    middleware(ctx)
  }
}
