import defu from 'defu'

import { Console } from '@/utils/console'
import { readAnyFileOf, readFile } from '@/utils/fs'

import { ConfigPath } from './path'
import { defaultConfig } from './defaults'

const configCache = new Map<string, IConfig>()

export class ConfigLoader {
  load(name?: string): IConfig {
    const cacheKey = name || 'default'

    if (configCache.has(cacheKey))
      return configCache.get(cacheKey)!

    const contentOrError = name
      ? readFile(name)
      : readAnyFileOf([
        'xiaoshop.json',
        'xiaoshop-cli.json',
      ])

    let loaded: IConfig

    if (contentOrError) {
      const isError = !contentOrError || contentOrError.startsWith('ERROR')

      if (!isError) {
        const config = JSON.parse(contentOrError)

        loaded = ConfigPath.resolveConfig(
          defu(config, defaultConfig),
        )
      }

      Console.error(contentOrError || 'No config file found.')
      process.exit(1)
    }

    loaded = ConfigPath.resolveConfig(defaultConfig)

    configCache.set(cacheKey, loaded)

    return loaded
  }
}
