<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  label?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="flex flex-y-center gap-3">
    <div :class="props.class" class="rounded-md shadow-sm size-6" />
    <div v-if="label || $slots.default" class="mt-1 text-center text-xs text-fg py-1">
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>
