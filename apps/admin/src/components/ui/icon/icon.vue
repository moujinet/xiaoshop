<script lang="ts" setup>
import type { UiIconProps } from './props'
import { Icon } from '@iconify/vue'

import ui from './ui.config'

defineOptions({
  name: 'UiIcon',
})

const props = withDefaults(defineProps<UiIconProps>(), {
  size: 'md',
})

const iconSet = useIcon()

const iconName = computed(() => {
  if (props.name.includes(':'))
    return props.name

  const pkg = props.package || iconSet.value.package
  const suffix = props.active ? iconSet.value.activeSuffix : iconSet.value.suffix

  return `${pkg}:${props.name}${suffix}`
})
</script>

<template>
  <UiLoading v-if="loading" :size="size" :loading="loading" :delay="0" />
  <Icon
    v-else
    :icon="iconName"
    :inline="inline"
    :class="ui.variants({ color, size, animate }, props.class)"
  />
</template>
