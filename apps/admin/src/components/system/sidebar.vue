<script lang="ts" setup>
defineOptions({
  name: 'SystemSidebar',
})
</script>

<template>
  <SystemPanel class="system-sidebar">
    <div>
      <div>
        <div>Header</div>
      </div>
    </div>
  </SystemPanel>
</template>

<style lang="less">
.system-sidebar {
  width: var(--layout-sidebar-width);
}
</style>
