<script lang="ts" setup>
defineOptions({
  name: 'SystemActivityMenuItem',
})

defineProps<{
  label: string
  icon?: string
  active?: boolean
}>()
</script>

<template>
  <div class="activity-menu-item" :class="active && 'is-active'">
    <UiIcon v-if="icon" :name="icon" class="activity-menu-item__icon" />
    {{ label }}
  </div>
</template>

<style>
.activity-menu-item {
  @apply flex-(~ v-center) gap-2 p-(x-4 y-2.5) hover:bg-$color-fill-3 rounded cursor-pointer transition-colors;

  &__icon {
    @apply text-(4 $menu-icon-color);
  }

  &.is-active {
    @apply bg-accent c-white;
  }
}
</style>
