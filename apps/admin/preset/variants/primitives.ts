const selector = 'data-state'
const variants = 'active|checked|closed|delayed-open|hidden|inactive|indeterminate|instant-open|off|on|open|unchecked|visible'

export function variantPrimitives(prefix: string) {
  return {
    name: 'primitives',
    match: (matcher: string) => {
      const regex = new RegExp(`^${prefix}(-not)?-(${variants})[:-]`)
      const match = matcher.match(regex)

      if (!match)
        return matcher

      const attr = `[${selector}~='${match[2]}']`

      return {
        matcher: matcher.slice(match[0].length),
        selector: (s: any) => (match[1] === '-not')
          ? `${s}[${selector}]:not(${attr}),:where([${selector}]:not(${attr})) ${s}:not(${selector})`
          : `${s}${attr},:where(${attr}) ${s}`,
      }
    },
    autocomplete: [
      `${prefix}-(${variants})(:|-)`,
      `${prefix}-not-(${variants})(:|-)`,
    ],
  }
}
