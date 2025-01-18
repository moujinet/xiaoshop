export * from './assets'
export * from './colors'

export function minifyCss(css: string) {
  return css.replace(/\n\s*/g, '').replace(/\s*([{}:!])\s*/g, '$1')
}
