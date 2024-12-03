<script lang="ts" setup>
import type { TagColor } from '@arco-design/web-vue'
import { Icon as Iconify } from '@iconify/vue'
import { DEFAULT_ICON_ACTIVE, DEFAULT_ICON_SET, DEFAULT_ICON_SUFFIX } from '~/constants/defaults'

defineOptions({
  name: 'UiIcon',
})

const props = defineProps<{
  name: string
  color?: TagColor | 'primary'
  iconset?: string
  suffix?: string
  inline?: boolean
  light?: boolean
  active?: boolean
  loading?: boolean
  spin?: boolean
  pulse?: boolean
  bounce?: boolean
}>()

const defaultIconset = inject('ICON_SET', DEFAULT_ICON_SET)
const defaultIconSuffix = inject('ICON_DEFAULT_SUFFIX', DEFAULT_ICON_SUFFIX)
const defaultIconActive = inject('ICON_ACTIVE_SUFFIX', DEFAULT_ICON_ACTIVE)

const iconName = computed(() => {
  if (props.name.includes(':'))
    return props.name

  const iconset = props.iconset || defaultIconset
  const suffix = props.active ? defaultIconActive : props.suffix || defaultIconSuffix

  return `${iconset}:${props.name}${suffix}`
})

const classNames = computed(() => {
  const classes = ['relative']

  if (props.color)
    classes.push(`c-${props.color}${props.light ? '-light' : ''}`)

  if (props.spin)
    classes.push('animate-spin')

  if (props.pulse)
    classes.push('animate-pulse')

  if (props.bounce)
    classes.push('animate-bounce')

  return classes
})
</script>

<template>
  <a-spin v-if="loading" />
  <template v-else>
    <Iconify :icon="iconName" :inline="inline" :class="classNames" />
  </template>
</template>
