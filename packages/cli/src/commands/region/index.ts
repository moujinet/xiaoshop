import { AbstractCommand } from '@/common/command'

/**
 * Region Command
 */
export class RegionCommand extends AbstractCommand {
  getCommandName() {
    return 'region <action>'
  }

  getCommandSummary() {
    return 'China Region Dictionary Updater'
  }

  getActions() {
    return [
      { alias: 'u', name: 'update', desc: 'Update Region Dictionary' },
      { alias: 'c', name: 'check', desc: 'Check Update' },
    ]
  }
}
