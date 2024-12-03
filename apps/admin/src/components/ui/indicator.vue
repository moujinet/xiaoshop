<script lang="ts" setup>
defineOptions({
  name: 'UiIndicator',
})

defineProps<{
  icon: string
  badge?: number
  tooltip?: string
  defaultTooltipVisible?: boolean
  active?: boolean
  activeClass?: string
}>()

const showBadge = usePreference('showBadge')
</script>

<template>
  <UiTooltip
    :disabled="tooltip ? false : true"
    :default-popup-visible="defaultTooltipVisible"
    :content="tooltip"
  >
    <a-badge :count="showBadge ? badge || 0 : 0" :offset="[-4, 4]" dot>
      <template v-if="$slots.badge" #content>
        <slot name="badge" />
      </template>
      <div
        class="rounded cursor-pointer c-$toolbar-icon-color hover:(c-$toolbar-icon-color-hover bg-fill-2) active:bg-fill-3 p-1.5 inline-flex text-5 transition-colors"
        :class="active && activeClass"
      >
        <UiIcon :name="icon" :active="active" />
      </div>
    </a-badge>
  </UiTooltip>
</template>
