import defu from 'defu'

import { Console } from '@/utils/console'
import { readAnyFileOf, readFile } from '@/utils/fs'

import { ConfigPath } from './path'
import { defaultConfig } from './defaults'

export class ConfigLoader {
  load(name?: string): IConfig {
    const contentOrError = name
      ? readFile(name)
      : readAnyFileOf([
        'xiaoshop.json',
        'xiaoshop-cli.json',
      ])

    if (contentOrError) {
      const isError = !contentOrError || contentOrError.startsWith('ERROR')

      if (!isError) {
        const config = JSON.parse(contentOrError)

        return ConfigPath.resolveConfig(
          defu(config, defaultConfig),
        )
      }

      Console.error(contentOrError || 'No config file found.')
      process.exit(1)
    }

    return ConfigPath.resolveConfig(defaultConfig)
  }
}

export function loadConfig() {
  return new ConfigLoader().load()
}
