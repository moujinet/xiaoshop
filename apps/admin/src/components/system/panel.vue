<script lang="ts" setup>
defineOptions({
  name: 'SystemPanel',
})

defineProps<{
  position?: 'left' | 'right'
}>()
</script>

<template>
  <div
    class="system-panel"
    :class="{
      'is-left': !position || position === 'left',
      'is-right': position === 'right',
    }"
  >
    <div class="system-panel__children">
      <slot />
    </div>
  </div>
</template>

<style lang="less">
.system-panel {
  top: 0;
  left: 0;
  z-index: 100;
  position: sticky;
  box-sizing: border-box;
  background-color: var(--theme-bg-panel);

  &.is-left {
    border-right: 1px solid var(--theme-border);
  }

  &.is-right {
    border-left: 1px solid var(--theme-border);
  }

  &__children {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>
