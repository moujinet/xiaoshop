/**
 * 问候
 *
 * @returns string
 */
export function getGreeting() {
  const hour = new Date().getHours()

  return hour < 9
    ? '早上好'
    : hour <= 11
      ? '上午好'
      : hour <= 13
        ? '中午好'
        : hour <= 17
          ? '下午好'
          : hour < 20
            ? '傍晚好'
            : '晚上好'
}

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
