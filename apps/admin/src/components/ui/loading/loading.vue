<script lang="ts" setup>
import type { UiLoadingProps } from './props'
import { createReusableTemplate } from '@vueuse/core'

import ui from './ui.config'

defineOptions({
  name: 'UiLoading',
})

const props = withDefaults(defineProps<UiLoadingProps>(), {
  as: 'div',
  delay: 400,
  loading: false,
})

const enabled = ref(false)

const [
  LoadingIndicatorTemplate,
  LoadingIndicator,
] = createReusableTemplate()

const slots = useSlots()

const isNested = computed(() => {
  const defaultSlot = slots.default?.()
  return !!defaultSlot
})

watch(
  () => props.loading,
  (value) => {
    setTimeout(() => {
      enabled.value = value
    }, props.delay)
  },
  { immediate: true },
)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="ui.merge(
      { relative: isNested && enabled },
      { 'inline-block leading-0': !isNested && enabled },
    )"
  >
    <LoadingIndicatorTemplate>
      <div v-if="enabled" :class="ui.merge(ui.indicator, props.class)">
        <div :class="ui.variants({ indicator, size })" />
        <span v-if="tip" :class="ui.tip" v-html="tip" />
      </div>
    </LoadingIndicatorTemplate>

    <div v-if="isNested && enabled" :class="ui.overlay">
      <LoadingIndicator />
    </div>

    <LoadingIndicator v-if="!isNested && enabled" />

    <slot />
  </Primitive>
</template>
