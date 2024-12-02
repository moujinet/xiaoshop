export type ILessVariables = Record<string, string>

export interface IViteThemePluginOptions {
  /**
   * 需要引入的 less 文件
   */
  imports: string[]
  /**
   * 转换器名称
   */
  transformer?: 'arco'
  /**
   * 转换变量名
   */
  transformNames?: string[]
}

export interface IViteThemeTransformer {
  (variables: ILessVariables, transformNames?: string[]): ILessVariables
}
