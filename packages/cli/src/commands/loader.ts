import { join } from 'node:path'
import { Command } from 'commander'
import { existsSync } from 'node:fs'

import { loadConfig } from '@/config'
import { ConfigPath } from '@/config/path'

import { RegionCommand } from './region'
import { MigrateCommand } from './migrate'
import { SchematicCommand } from './schematic'

export class CommandLoader {
  /**
   * 初始化
   */
  static async init(program: Command) {
    loadConfig()

    if (existsSync(ConfigPath.paths.CLI_LOCAL)) {
      // eslint-disable-next-line ts/no-require-imports
      const local = require(join(ConfigPath.paths.CLI_LOCAL, 'dist', 'commands', 'loader'))
      await local.CommandLoader.load(program)
    }
    else {
      await CommandLoader.load(program)
    }
  }

  /**
   * 加载命令
   */
  static async load(program: Command) {
    /**
     * Migrate Command
     *
     * @example
     * ```bash
     * $ xiaoshop migrate run
     * ```
     */
    await new MigrateCommand().load(program)

    /**
     * Region Command
     *
     * @example
     * ```bash
     * $ xiaoshop region update
     * ```
     */
    await new RegionCommand().load(program)

    /**
     * Schematic Command
     *
     * @example
     * ```bash
     * $ xiaoshop new module
     * ```
     */
    await new SchematicCommand().load(program)
  }
}
