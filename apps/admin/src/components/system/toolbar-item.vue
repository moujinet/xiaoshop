<script lang="ts" setup>
defineOptions({
  name: 'SystemToolbarItem',
})

defineProps<{
  icon: string
  count?: number
  tooltip?: string
  defaultTooltipVisible?: boolean
  activeIcon?: boolean
  activeIconClass?: string
}>()
</script>

<template>
  <a-tooltip
    :disabled="tooltip ? false : true"
    :default-popup-visible="defaultTooltipVisible"
    :content="tooltip"
    mini
  >
    <a-badge :count="count || 0" dot>
      <div
        class="clickable p-1 inline-flex text-(5 color-$theme-comment)"
        :class="activeIcon ? activeIconClass : ''"
      >
        <UiIcon :name="icon" :active="activeIcon" />
      </div>
    </a-badge>
  </a-tooltip>
</template>
