<script lang="ts" setup>
import type { TagColor } from '@arco-design/web-vue'
import { Icon as Iconify } from '@iconify/vue'
import { DEFAULT_ICON_ACTIVE_SUFFIX, DEFAULT_ICON_SET, DEFAULT_ICON_SUFFIX } from '~/constants/defaults'

defineOptions({
  name: 'UiIcon',
})

const props = defineProps<{
  name: string
  color?: TagColor | string
  light?: boolean
  iconset?: string
  suffix?: string
  active?: boolean
  inline?: boolean
  loading?: boolean
}>()

const defaultIconset = inject('ICON_SET', DEFAULT_ICON_SET)
const suffixDefault = inject('ICON_DEFAULT_SUFFIX', DEFAULT_ICON_SUFFIX)
const suffixActive = inject('ICON_ACTIVE_SUFFIX', DEFAULT_ICON_ACTIVE_SUFFIX)

const icon = computed(() => {
  if (props.name.includes(':'))
    return props.name

  const suffix = props.active ? suffixActive : props.suffix || suffixDefault
  const iconset = props.iconset || defaultIconset

  return `${iconset}:${props.name}${suffix}`
})

const color = computed(() => {
  return !props.color
    ? ''
    : props.light
      ? `c-${props.color}-light`
      : `c-${props.color}`
})
</script>

<template>
  <a-spin v-if="loading" />
  <Iconify v-else :icon="icon" :inline="inline" :class="color" />
</template>
