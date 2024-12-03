<script lang="ts" setup>
defineOptions({
  name: 'UiPopup',
})

defineProps<{
  className?: string
  compact?: boolean
}>()
</script>

<template>
  <a-trigger
    :popup-offset="8"
    :content-class="{
      'text-body rounded': true,
      'p-3': !compact,
      className,
    }"
    animation-name="slide-dynamic-origin"
    trigger="click"
  >
    <slot />

    <template #content>
      <slot name="content" />
    </template>
  </a-trigger>
</template>
