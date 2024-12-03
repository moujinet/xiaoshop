<script lang="ts" setup>
defineOptions({
  name: 'UiKbd',
})

defineProps<{
  value?: string
}>()
</script>

<template>
  <kbd class="flex-(~ inline center) px-1 h-5 min-w-20px font-(medium sans) text-(11px disable) bg-fill-2 ring-(1 inset border) uppercase rounded select-none">
    <slot>{{ value }}</slot>
  </kbd>
</template>
