export abstract class AbstractAction implements ICommandAction {
  abstract run(): Promise<void>
}
