export interface IViteLessSitterOptions {
  /**
   * 需要引入的 less 文件
   */
  imports: string[]
  /**
   * 简化 Arco Design 的颜色变量
   *
   * 使用 `@red: #ff0000;` 替换 `@red-[1-10]` 及 `@dark-red-[1-10]` 等序列变量
   *
   * @default false
   */
  simplify?: boolean
}

export type Variables = Record<string, string>
