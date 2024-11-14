import { AbstractCommand } from '@/common/command'

/**
 * Region Command
 */
export class RegionCommand extends AbstractCommand {
  getName() {
    return 'region'
  }

  getAlias() {
    return 'r'
  }

  getSummary() {
    return `Region Dictionary Update`
  }

  getActions() {
    return [
      { alias: 'cn', name: 'china', desc: 'Update China Mainland Region Dictionary' },
    ]
  }
}
