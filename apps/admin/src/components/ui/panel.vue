<script lang="ts" setup>
defineOptions({
  name: 'UiPanel',
})
</script>

<template>
  <div class="ui-panel">
    <div class="ui-panel--inner">
      <slot />
    </div>
  </div>
</template>

<style>
.ui-panel {
  @apply bg-$panel-bg b-(solid border width-$panel-border-width) rounded;

  &--inner {
    @apply p-$layout-content-padding;
  }
}
</style>
