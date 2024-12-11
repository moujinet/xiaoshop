/**
 * 拆分点分 ID
 *
 * @example
 * `account.profile.update` => ['account', 'account.profile', 'account.profile.update']
 *
 * @param id 点分 ID
 * @returns 拆分后的 ID
 */
export function splitDotId(id: string): string[] {
  const ids = id.split('.')

  return ids.map(
    (_, index) => ids.slice(0, index + 1).join('.'),
  )
}

/**
 * 标准化点分 ID
 *
 * @param id 点分 ID
 * @param parent 父节点
 * @returns 标准化后的点分 ID
 */
export function toDotId(id: string, parent?: string): string {
  const fullId = parent ? `${parent}.${id}` : id

  return fullId
    .replace(/#/, '')
    .replace(/\.index$/, '')
}

/**
 * 转换为路径
 *
 * @example
 * `account.profile.update` => `/account/profile/update`
 *
 * @param id 点分 ID
 * @returns 路径
 */
export function toPath(id: string): string {
  const paths = id.split('.')

  if (paths[paths.length - 1] === 'index')
    paths.pop()

  return `/${paths.splice(1).join('/')}`
}
