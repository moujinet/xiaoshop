import type { IContext, IContextCallback } from './context'

export interface IDefinePluginOptions {
  (ctx: IContext): void
}

/**
 * 定义插件
 *
 * @param plugin IDefinePluginOptions
 * @returns IContextCallback
 */
export function definePlugin(plugin: IDefinePluginOptions): IContextCallback {
  return (ctx: IContext) => plugin(ctx)
}

/**
 * 安装插件
 *
 * @param ctx IContext
 */
export function installPlugins(ctx: IContext) {
  const plugins = import.meta.glob<IContextCallback>('~/plugins/**/install.ts', {
    eager: true,
    import: 'default',
  })

  for (const install of Object.values(plugins)) {
    install(ctx)
  }
}
