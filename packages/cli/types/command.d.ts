declare interface ICommandActionDefinition {
  /**
   * 命令动作别名
   */
  alias: string
  /**
   * 命令动作名称
   */
  name: string
  /**
   * 命令动作描述
   */
  desc: string
}

declare interface ICommandAction {
  /**
   * 执行
   */
  run: () => Promise<void>
}
