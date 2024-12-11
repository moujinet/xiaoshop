<script lang="ts" setup>
import type { UiButtonProps } from './props'
import { Primitive } from 'radix-vue'
import * as ui from './ui.config'

defineOptions({
  name: 'UiButton',
})

const props = withDefaults(defineProps<UiButtonProps>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(ui.button({ size, variant, rounded }), props.class)"
  />
</template>
