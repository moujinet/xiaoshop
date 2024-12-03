<script lang="ts" setup>
import { DEFAULT_TOOLTIP_DELAY } from '~/constants/defaults'

defineOptions({
  name: 'UiTooltip',
})
</script>

<template>
  <a-tooltip :mouse-enter-delay="DEFAULT_TOOLTIP_DELAY" mini>
    <slot />
  </a-tooltip>
</template>
