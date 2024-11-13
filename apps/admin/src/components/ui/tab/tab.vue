<script lang="ts" setup>
defineOptions({
  name: 'UiTab',
})

defineProps<{
  defaultActiveKey?: string
}>()

const tabsRef = ref<HTMLElement>()
const activeKey = defineModel<string>('activeKey')

const width = ref(0)
const index = ref(0)

onMounted(() => {
  watch(
    activeKey,
    () => {
      if (!tabsRef.value)
        return

      nextTick(() => {
        const tabs = tabsRef.value?.getElementsByClassName('ui-tab-item')

        if (!tabs)
          return

        for (let i = 0; i < tabs.length; i++) {
          if (tabs.item(i)?.classList.contains('is-active')) {
            width.value = tabs.item(i)?.clientWidth || 0
            index.value = i
            break
          }
        }
      })
    },
    { immediate: true },
  )
})

provide('UI_TAB_ACTIVE_KEY', activeKey)
</script>

<template>
  <ul ref="tabsRef" class="ui-tab">
    <slot />
    <li
      class="ui-tab__slider"
      :style="{
        width: `${width}px`,
        transform: `translateX(calc(${index} * 100% + ${index} * var(--page-gap-sm)))`,
      }"
    />
  </ul>
</template>

<style lang="less">
.ui-tab {
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: var(--page-gap-sm);

  &-item {
    z-index: 2;
    border-radius: 4px;
    color: var(--theme-title);
    transition: color 0.15s ease-in;

    &__icon {
      font-size: 16px;
      color: var(--theme-placeholder);
    }

    &:hover {
      color: var(--theme-primary);
      background-color: var(--color-fill-2);
    }

    &.is-active {
      color: #fff;
      background-color: transparent;

      .ui-tab-item__icon {
        color: #fff;
      }
    }
  }

  &__slider {
    z-index: 1;
    position: absolute;
    height: 100%;
    border-radius: 4px;
    background-color: var(--theme-primary);
    transition: 0.25s ease-out;
  }
}
</style>
