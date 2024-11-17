<script lang="ts" setup>
defineOptions({
  name: 'SystemShortcut',
})
</script>

<template>
  <code class="system-shortcut">
    <slot />
  </code>
</template>

<style lang="less">
.system-shortcut {
  font-size: 12px;
  padding: 3.5px 6px;
  border-radius: 3px;
  line-height: 1;
  border: 1px solid var(--theme-border);
  box-shadow: 0 1px var(--theme-border);
  background-color: var(--theme-bg-component);
}
</style>
