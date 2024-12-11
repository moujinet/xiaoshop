<script lang="ts" setup>
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'radix-vue'
import ui, { type KbdVariants } from './ui.config'

export interface KbdProps extends PrimitiveProps {
  value?: string
  size?: KbdVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<KbdProps>(), {
  as: 'kbd',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="ui.variants({ size }, props.class)"
  >
    <slot>{{ value }}</slot>
  </Primitive>
</template>
