<script lang="ts" setup>
useHead({
  meta: [
    {
      name: 'msapplication-TileColor',
      content: '#0055ff',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#0055ff' : '#ffffff',
    },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0055ff' },
  ],
})
</script>

<template>
  <RouterView />
</template>
