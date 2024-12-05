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
    <UiIcon v-if="icon" :name="icon" class="text-(3.5 info)" />
    {{ name }}
  </div>
  <div class="p-b-2.5">
    <slot />
  </div>
</template>

<style>
.activity-menu__header {
  @apply flex-(~ v-center) gap-2 text-(3 info) p-(x-3 y-3);
}
</style>
