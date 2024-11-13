/**
 * 数据字典
 */
export interface IDict {
  /**
   * 键名
   */
  key: number
  /**
   * 健值
   */
  value: string
  /**
   * 其它
   */
  [key: string]: any
}

/**
 * 键值字典
 */
export interface IKeyValue<T = any> {
  [key: string]: T
}

/**
 * 地区字典
 */
export interface ILocation {
  code: string
  name: string
}

/**
 * 嵌套地区字典
 */
export interface ILocationNested extends ILocation {
  children: ILocationNested[]
}

/**
 * 地区路径
 *
 * ```ts
 * const path = [
 *   { code: '11', name: '北京' },
 *   { code: '1101', name: '东城区' }
 *   { code: '110101', name: '东华门街道' }
 * ]
 * ```
 */
export type ILocationPath = ILocation[]
