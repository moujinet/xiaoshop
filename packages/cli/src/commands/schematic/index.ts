import { AbstractCommand } from '@/common/command'

/**
 * Schematic Command
 */
export class SchematicCommand extends AbstractCommand {
  getCommandName() {
    return 'new <action>'
  }

  getCommandSummary() {
    return 'Generate a XiaoShop element'
  }

  getActions() {
    return [
      { alias: 'mo', name: 'module', desc: 'Generate a new Module' },
      { alias: 'do', name: 'domain', desc: 'Generate a new Domain' },
      { alias: 'm', name: 'model', desc: 'Generate a new Model' },
      { alias: 'c', name: 'controller', desc: 'Generate a new Controller' },
      { alias: 'sch', name: 'scheduler', desc: 'Generate a new Scheduler Service' },
      { alias: 'set', name: 'setting', desc: 'Generate a new Setting file' },
    ]
  }
}
