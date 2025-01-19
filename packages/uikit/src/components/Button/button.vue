<script lang="ts" setup>
import type { ButtonProps } from './button.props'
import { Primitive } from 'radix-vue'

import ui from './button.ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :disabled="disabled || loading"
    :class="ui.variants({
      variant,
      color,
      size,
      radius,
    }, props.class)"
  >
    <i v-if="loading" :class="ui.loading" />
    <slot />
  </Primitive>
</template>
