import type { Preflights } from '../../types'
import { minifyCss } from '../../utils'

export function preflightShadows(lightMode: string, darkMode: string): Preflights {
  const shadows = `
${lightMode} {
--shadow-1:
  inset 0 0 0 1px var(--neutral-a5),
  inset 0 1.5px 2px 0 var(--neutral-a2),
  inset 0 1.5px 2px 0 var(--black-a2);

--shadow-2:
  0 0 0 1px var(--neutral-a3),
  0 0 0 0.5px var(--black-a1),
  0 1px 1px 0 var(--neutral-a2),
  0 2px 1px -1px var(--black-a1),
  0 1px 3px 0 var(--black-a1);

--shadow-3:
  0 0 0 1px var(--neutral-a3),
  0 2px 3px -2px var(--neutral-a3),
  0 3px 12px -4px var(--black-a2),
  0 4px 16px -8px var(--black-a2);

--shadow-4:
  0 0 0 1px var(--neutral-a3),
  0 8px 40px var(--black-a1),
  0 12px 32px -16px var(--neutral-a3);

--shadow-5:
  0 0 0 1px var(--neutral-a3),
  0 12px 60px var(--black-a3),
  0 12px 32px -16px var(--neutral-a5);

--shadow-6:
  0 0 0 1px var(--neutral-a3),
  0 12px 60px var(--black-a3),
  0 16px 64px var(--neutral-a2),
  0 16px 36px -20px var(--neutral-a7);
}

${darkMode} {
--shadow-1:
  inset 0 -1px 1px 0 var(--neutral-a3),
  inset 0 0 0 1px var(--neutral-a3),
  inset 0 3px 4px 0 var(--black-a5),
  inset 0 0 0 1px var(--neutral-a4);

--shadow-2:
  0 0 0 1px var(--neutral-a6),
  0 0 0 0.5px var(--black-a3),
  0 1px 1px 0 var(--black-a6),
  0 2px 1px -1px var(--black-a6),
  0 1px 3px 0 var(--black-a5);

--shadow-3:
  0 0 0 1px var(--neutral-a6),
  0 2px 3px -2px var(--black-a3),
  0 3px 8px -2px var(--black-a6),
  0 4px 12px -4px var(--black-a7);

--shadow-4:
  0 0 0 1px var(--neutral-a6),
  0 8px 40px var(--black-a3),
  0 12px 32px -16px var(--black-a5);

--shadow-5:
  0 0 0 1px var(--neutral-a6),
  0 12px 60px var(--black-a5),
  0 12px 32px -16px var(--black-a7);

--shadow-6:
  0 0 0 1px var(--neutral-a6),
  0 12px 60px var(--black-a4),
  0 16px 64px var(--black-a6),
  0 16px 36px -20px var(--black-a11);
}`

  return [
    {
      getCSS() {
        return minifyCss(shadows)
      },
    },
  ]
}
