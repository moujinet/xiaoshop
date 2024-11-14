import { join, posix, resolve } from 'node:path'

import { renderString } from '@/utils/render'

export class ConfigPath {
  /**
   * @description 配置路径
   */
  static paths: Record<string, string> = {
    CLI_LOCAL: posix.join(process.cwd(), 'node_modules', '@xiaoshop', 'cli'),
  }

  /**
   * 解析配置路径
   */
  static resolveConfig(config: IConfig): IConfig {
    ConfigPath.paths.PROJECT_ROOT = config.projectRoot
      ? resolve(config.projectRoot)
      : process.cwd()

    ConfigPath.paths.CACHE_ROOT = config.cacheRoot
      ? resolve(join(ConfigPath.paths.PROJECT_ROOT, config.cacheRoot))
      : join(ConfigPath.paths.PROJECT_ROOT, '.cache')

    for (const key in config.alias) {
      ConfigPath.paths[key] = resolve(
        join(config.projectRoot, config.alias[key]),
      )
    }

    for (const key in config.migration) {
      config.migration[key] = ConfigPath.resolve(config.migration[key])
    }

    for (const key in config.region) {
      config.region[key] = ConfigPath.resolve(config.region[key])
    }

    return config
  }

  /**
   * 解析路径
   */
  static resolve(path: string) {
    return renderString(path, ConfigPath.paths)
  }
}
