<script lang="ts" setup>
defineOptions({
  name: 'SystemSidebar',
})
</script>

<template>
  <SystemLayoutPanel class="system-sidebar">
    <slot />
  </SystemLayoutPanel>
</template>

<style lang="less">
.system-sidebar {
  width: var(--layout-sidebar-width);
}
</style>
