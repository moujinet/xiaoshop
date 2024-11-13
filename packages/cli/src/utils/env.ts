export const isDebug
  = process.argv.includes('-d')
  || process.argv.includes('--debug')
  || process.env.DEBUG !== undefined

export function onDebug(fn: () => void) {
  if (isDebug) {
    fn()
  }
}
