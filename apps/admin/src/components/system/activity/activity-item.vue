<script lang="ts" setup>
defineOptions({
  name: 'SystemActivityItem',
})

withDefaults(defineProps<{
  icon: string
  active?: boolean
  tooltip?: string
  count?: number
}>(), {
  count: 0,
})
</script>

<template>
  <a-tooltip
    :disabled="tooltip ? false : true"
    :content="tooltip"
    position="right"
    mini
  >
    <div
      class="flex-(~ col center) h-12 text-5.5 cursor-pointer transition-colors"
      :class="active ? 'c-primary' : 'c-$theme-comment hover:c-$theme-text'"
    >
      <a-badge :count="count" :offset="[4, -4]" dot>
        <UiIcon :name="icon" :active="active" />
      </a-badge>
    </div>
  </a-tooltip>
</template>
