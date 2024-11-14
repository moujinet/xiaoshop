import { join } from 'node:path'
import { Command } from 'commander'
import * as color from 'picocolors'
import * as Table from 'cli-table3'
import { existsSync } from 'node:fs'
import { pascalCase } from 'es-toolkit'

import { ConfigPath } from '@/config'
import { Console } from '@/utils/console'

export abstract class AbstractCommand {
  /**
   * Get Command name
   */
  abstract getName(): string

  /**
   * Get Command alias
   */
  abstract getAlias(): string

  /**
   * Get Command Summary
   */
  abstract getSummary(): string

  /**
   * Get Actions
   */
  abstract getActions(): ICommandActionDefinition[]

  /**
   * Load Command
   *
   * @param program Command
   */
  async load(program: Command) {
    program
      .command(`${this.getName()} <action>`)
      .alias(this.getAlias())
      .summary(this.getSummary())
      .description(this.buildDescription())
      .action(async (name: string) => {
        try {
          await this.runAction(name)
        }
        catch (e) {
          Console.error(e)
        }
      })
  }

  /**
   * Run Action
   */
  private async runAction(name: string) {
    const actionName = this.getActions().find(
      a => a.alias === name || a.name === name,
    )?.name || ''

    if (!actionName)
      throw new Error(`Action "${name}" not found.`)

    const className = `${pascalCase(actionName)}Action`
    const classFile = join(ConfigPath.paths.CLI_LOCAL, 'dist', 'commands', this.getName(), `${actionName}.js`)

    if (!existsSync(classFile))
      throw new Error(`File "${classFile}" not exists.`)

    // eslint-disable-next-line ts/no-require-imports
    const ActionClass = require(classFile)[className]
    const action: ICommandAction = new ActionClass()

    return await action.run()
  }

  private buildDescription() {
    return (
      `${color.cyan(color.bold(this.getSummary()))}.
      \nAvailable actions:
      \n${this.buildListAsTable(this.getActions())}`
    )
  }

  /**
   * Build List As Table
   */
  private buildListAsTable(columns: ICommandActionDefinition[]) {
    const config = {
      chars: {
        'mid': '',
        'left-mid': '',
        'mid-mid': '',
        'right-mid': '',
      },
      head: [
        'Action',
        'Alias',
        'Description',
      ],
      style: {
        head: ['cyan', 'bold'],
      },
    }

    const table: any = new Table(config)

    for (const column of columns) {
      table.push([
        column.name,
        column.alias,
        column.desc,
      ])
    }

    return table.toString()
  }
}
