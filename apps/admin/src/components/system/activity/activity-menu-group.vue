<script lang="ts" setup>
defineOptions({
  name: 'SystemActivityMenuGroup',
})

defineProps<{
  name: string
  icon?: string
}>()
</script>

<template>
  <div class="activity-menu__header">
    {{ name }}
  </div>
  <div class="p-b-2.5">
    <slot />
  </div>
</template>

<style>
.activity-menu__header {
  @apply flex-(~ v-center between) text-(3 $color-neutral-4) p-(x-3 y-2);
}
</style>
