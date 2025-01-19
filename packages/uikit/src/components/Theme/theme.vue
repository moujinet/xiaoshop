<script lang="ts">
import type { ThemeContext, ThemeProps } from './props'

import { createContext } from 'radix-vue'
import { toRefs, watchEffect } from 'vue'

export const [
  useThemeContext,
  provideThemeContext,
] = createContext<ThemeContext>('Theme')
</script>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ThemeProps>(), {
  appearance: 'auto',
  theme: 'default',
  accent: undefined,
  gray: undefined,
  radius: undefined,
})

const { appearance, theme, accent, gray, radius } = toRefs(props)

provideThemeContext({
  appearance,
  theme,
  accent,
  gray,
  radius,
})

const html = document.documentElement

watchEffect(() => {
  // Dark mode
  html.classList.toggle('dark', appearance.value === 'dark')

  // Theme
  html.setAttribute('data-theme', theme.value)

  // Accent color
  if (accent.value) {
    html.style.setProperty('--accent', `var(--${accent.value})`)

    for (let i = 1; i <= 12; i++) {
      html.style.setProperty(
        `--accent-${i}`,
        `var(--${accent.value}-${i})`,
      )
    }
  }
  else {
    html.style.removeProperty('--accent')

    for (let i = 1; i <= 12; i++) {
      html.style.removeProperty(`--accent-${i}`)
    }
  }

  // Gray color
  if (gray.value) {
    html.style.setProperty('--neutral', `var(--${gray.value})`)

    for (let i = 1; i <= 12; i++) {
      html.style.setProperty(`--neutral-${i}`, `var(--${gray.value}-${i})`)
      html.style.setProperty(`--neutral-a${i}`, `var(--${gray.value}-a${i})`)
    }
  }
  else {
    html.style.removeProperty('--neutral')

    for (let i = 1; i <= 12; i++) {
      html.style.removeProperty(`--neutral-${i}`)
      html.style.removeProperty(`--neutral-a${i}`)
    }
  }
})
</script>

<template>
  <slot />
</template>
