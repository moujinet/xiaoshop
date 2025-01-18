import type { Preflights } from '../../types'
import { minifyCss } from '../../utils'

export function preflightBase(darkMode: string): Preflights {
  const base = `
:root {
  color-scheme: light;
  color: var(--theme-fg);
  background-color: var(--theme-page);
  overflow-wrap: break-word;
  text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${darkMode} {
  color-scheme: dark;
}`

  return [
    {
      getCSS() {
        return minifyCss(base)
      },
    },
  ]
}
