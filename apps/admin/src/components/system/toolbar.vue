<script lang="ts" setup>
defineOptions({
  name: 'SystemToolbar',
  inheritAttrs: false,
})
</script>

<template>
  <a-space>
    <SystemToolbarItem icon="qrcode" tooltip="访问店铺" />
    <SystemNotification />
  </a-space>
</template>
