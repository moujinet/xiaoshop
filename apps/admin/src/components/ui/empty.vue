<script lang="ts" setup>
defineOptions({
  name: 'UiEmpty',
})

defineProps<{
  type?: 'empty' | 'notfound' | 'search' | 'forbidden'
  desc?: string
}>()
</script>

<template>
  <div class="flex-(~ col center) h-full text-$theme-placeholder select-none">
    <IconEmptyFound v-if="type === 'notfound'" />
    <IconEmptySearch v-else-if="type === 'search'" class="w-30 h-full" />
    <IconEmptyForbidden v-else-if="type === 'forbidden'" />
    <IconEmptyDefault v-else />

    <div v-if="desc || $slots.default" class="flex-(~ col center) gap-2 text-(3 $theme-placeholder)">
      <slot>{{ desc }}</slot>
    </div>
  </div>
</template>
