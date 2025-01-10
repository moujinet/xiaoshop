export function hexToRGB(hex: string) {
  const bigint = Number.parseInt(hex.replace('#', ''), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `${r},${g},${b}`
}

export function minifyCss(css: string) {
  return css.replace(/\n\s*/g, '').replace(/\s*([{}:!])\s*/g, '$1')
}
