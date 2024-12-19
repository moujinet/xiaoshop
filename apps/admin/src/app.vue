<script lang="ts" setup>
useHead({
  meta: [
    {
      name: 'msapplication-TileColor',
      content: '#020617',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#020617' : '#ffffff',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0055ff' },
  ],
})
</script>

<template>
  <ConfigProvider>
    <UiTheme>
      <RouterView />
    </UiTheme>
  </ConfigProvider>
</template>
