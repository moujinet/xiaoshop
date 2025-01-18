export function isColorName(str: unknown): boolean {
  return isString(str) && String(str).startsWith('--')
}

export function isString(str: unknown): boolean {
  return typeof str === 'string'
}
