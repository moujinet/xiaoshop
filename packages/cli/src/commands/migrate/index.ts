import { AbstractCommand } from '@/common/command'

/**
 * Migrate Command
 */
export class MigrateCommand extends AbstractCommand {
  getName() {
    return 'migrate'
  }

  getAlias() {
    return 'mg'
  }

  getSummary() {
    return 'Database Migration'
  }

  getActions() {
    return [
      { alias: 'c', name: 'create', desc: 'Create a new Migration' },
      { alias: 'g', name: 'generate', desc: 'Generate migration from schema & settings' },
      { alias: 're', name: 'revert', desc: 'Revert last migration' },
      { alias: 'r', name: 'run', desc: 'Run all migrations' },
    ]
  }
}
