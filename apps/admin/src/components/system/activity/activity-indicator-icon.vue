<script lang="ts" setup>
defineOptions({
  name: 'SystemActivityIndicatorIcon',
})

withDefaults(defineProps<{
  icon: string
  active?: boolean
  tooltip?: string
  badge?: number
  mini?: boolean
}>(), {
  badge: 0,
})

const showBadge = usePreference('showBadge')
</script>

<template>
  <div
    class="flex-(~ center) h-12 w-full cursor-pointer"
    :class="{
      'c-$indicator-icon-active-color': active,
      'c-$indicator-icon-color hover:c-$indicator-icon-color-hover': !active,
      'text-4.5': mini,
      'text-6.5': !mini,
    }"
  >
    <UiTooltip
      :disabled="tooltip ? false : true"
      :content="tooltip"
      position="right"
    >
      <a-badge :count="showBadge ? badge || 0 : 0" :offset="[4, -4]" dot>
        <UiIcon :name="icon" :active="active" />
      </a-badge>
    </UiTooltip>
  </div>
</template>
