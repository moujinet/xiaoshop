<script lang="ts" setup>
import { computedEager, useDebounceFn, useEventListener, useParentElement } from '@vueuse/core'

defineOptions({
  name: 'UiScrollbar',
  inheritAttrs: false,
})

defineProps<{
  outerClass?: string
}>()

const parentElm = useParentElement()
const parentHeight = computedEager(() => parentElm.value?.clientHeight)
const height = ref(0)

const onResize = useDebounceFn(() => {
  height.value = parentElm.value?.clientHeight || 0
})

onMounted(() => {
  useEventListener(window, 'resize', onResize)
})
</script>

<template>
  <a-scrollbar
    class="overflow-auto"
    :outer-class="`ui-scrollbar${outerClass ? ` ${outerClass}` : ''}`"
    :style="{ height: height ? `${height}px` : `${parentHeight}px` }"
  >
    <slot />
  </a-scrollbar>
</template>

<style lang="less">
.ui-scrollbar {
  .arco-scrollbar-track-direction-vertical {
    width: 12px;

    & .arco-scrollbar-thumb-bar {
      width: 6px;
    }
  }
}
</style>
