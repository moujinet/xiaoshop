<script lang="ts" setup>
defineOptions({
  name: 'UiLink',
})

defineProps<{
  prefixIcon?: string
  suffixIcon?: string
  to?: string
}>()
</script>

<template>
  <a
    :href="to"
    class="flex-(inline v-center gap-1) cursor-pointer text-$theme-comment hover:c-$theme-text hover:c-$theme-title"
  >
    <slot name="prefix">
      <UiIcon v-if="prefixIcon" :name="prefixIcon" class="text-4" />
    </slot>
    <slot />
    <slot name="suffix">
      <UiIcon v-if="suffixIcon" :name="suffixIcon" class="text-4" />
    </slot>
  </a>
</template>
