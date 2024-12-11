<script lang="ts" setup>
import type { UiKbdProps } from './props'
import { Primitive } from 'radix-vue'
import * as ui from './ui.config'

defineOptions({
  name: 'UiKbd',
})

const props = withDefaults(defineProps<UiKbdProps>(), {
  as: 'kbd',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(ui.kbd({ size }), props.class)"
  >
    <slot>{{ value }}</slot>
  </Primitive>
</template>
