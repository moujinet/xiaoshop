<script lang="ts" setup>
defineOptions({
  name: 'SystemToolbarIcon',
})

defineProps<{
  icon: string
  badge?: number
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
    <a-badge :count="badge || 0" dot>
      <div
        class="clickable p-1 inline-flex text-5"
        :class="activeIcon ? activeIconClass : 'color-$theme-comment'"
      >
        <UiIcon :name="icon" :active="activeIcon" />
      </div>
    </a-badge>
  </a-tooltip>
</template>
