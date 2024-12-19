<script lang="ts" setup>
import type { UiThemeProps } from './props'
import { DEFAULT_ICON_SET } from '~/config/defaults'

defineOptions({
  name: 'UiTheme',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<UiThemeProps>(), {
  appearance: 'auto',
  accentColor: 'indigo',
  grayColor: 'gray',
  radius: 'md',
  iconSet: () => (DEFAULT_ICON_SET),
})

const {
  appearance,
  accentColor,
  grayColor,
  radius,
  iconSet,
} = toRefs(props)

provideThemeContext({
  appearance,
  accentColor,
  grayColor,
  radius,
  iconSet,
})
</script>

<template>
  <slot />
</template>
