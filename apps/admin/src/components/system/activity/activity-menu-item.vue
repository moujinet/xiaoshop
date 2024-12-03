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
  @apply flex-(~ v-center) gap-2 p-(x-3.5 y-3) hover:bg-$color-fill-2 rounded cursor-pointer transition-colors;

  &__icon {
    @apply text-(4 $menu-icon-color);
  }

  &.is-active {
    @apply bg-accent c-white;
  }
}
</style>
