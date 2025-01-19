import { AbstractCommand } from '@/common/command'

/**
 * Uikit Command
 */
export class UikitCommand extends AbstractCommand {
  getName() {
    return 'uikit'
  }

  getAlias() {
    return 'ui'
  }

  getSummary() {
    return 'Generate UiKit Skeleton'
  }

  getActions() {
    return [
      { alias: 'com', name: 'component', desc: 'Generate a new UiKit component' },
    ]
  }
}
