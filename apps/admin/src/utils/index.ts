/**
 * 空函数
 */
export function noopFn() {}

/**
 * 替换字符串中的变量
 *
 * @example `replaceVariables('Hello {name}', { name: 'xiaoshop' })`
 * @param str string
 * @param obj object
 * @returns string
 */
export function replaceVariables(str: string, obj: Record<string, any>) {
  return str.replace(/\{([^}]+)\}/g, (_, key) => obj[key] || '')
}
