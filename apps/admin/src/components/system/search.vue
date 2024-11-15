<script lang="ts" setup>
import { useEventListener } from '@vueuse/core'

defineOptions({
  name: 'SystemSearch',
})

const visible = ref(false)
const keyword = ref('')
const keywordRef = ref<HTMLInputElement>()

const cleanup = useEventListener(window, 'keydown', (e) => {
  if (e.key === '/')
    showModal()
})

onUnmounted(() => {
  cleanup()
})

function showModal() {
  keyword.value = ''
  visible.value = true
}

function onAfterModalShow() {
  keywordRef.value?.focus()
}
</script>

<template>
  <div class="system-search" @click="showModal">
    <UiIcon name="search" class="system-search__icon" />
    <div class="flex-(~ v-center 1 between) lt-lg:hidden lg-md:w-50">
      <span>搜索</span>
      <code class="system-search-shortcut">/</code>
    </div>
  </div>

  <a-modal
    v-model:visible="visible"
    :align-center="false"
    :closable="false"
    :footer="false"
    :width="560"
    :top="50"
    modal-class="system-search-modal"
    modal-animation-name="zoom-in"
    hide-title
    simple
    @open="onAfterModalShow"
  >
    <div class="flex-(~ v-center) p-(x-4 y-5) gap-2 b-b-(1 solid $theme-border)">
      <UiIcon name="search" class="text-(5 primary)" />
      <input
        ref="keywordRef"
        v-model="keyword"
        name="keyword"
        type="text"
        placeholder="搜索"
        class="flex-1 border-0 placeholder-c-$theme-placeholder"
      >
    </div>

    <div class="py-12">
      <UiEmpty type="search" desc="没有搜索历史" />
    </div>

    <div class="flex-(~ v-center between) p-4 b-t-(1 solid $theme-border) text-(3 $theme-placeholder)">
      <div class="flex-(~ v-center) gap-4">
        <span class="flex-(~ v-center) gap-2">
          <code class="system-search-shortcut">↩︎</code>
          选择
        </span>
        <span class="flex-(~ v-center) gap-2">
          <code class="system-search-shortcut">↑</code>
          <code class="system-search-shortcut">↓</code>
          切换
        </span>
      </div>

      <div class="flex-(~ v-center) gap-4">
        <span class="flex-(~ v-center) gap-2">
          打开搜索
          <code class="system-search-shortcut">/</code>
        </span>
        <span class="flex-(~ v-center) gap-2">
          退出
          <code class="system-search-shortcut">ESC</code>
        </span>
      </div>
    </div>
  </a-modal>
</template>

<style lang="less">
.system-search {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 var(--page-gap-sm);
  font-size: 16px;
  border-radius: 4px;
  color: var(--theme-placeholder);
  border: 1px solid var(--theme-border);
  background-color: var(--theme-bg-component);
  cursor: pointer;

  &__icon {
    font-size: 16px;
  }

  span {
    font-size: 14px;
    margin-left: var(--page-gap-sm);
  }

  &-shortcut {
    font-size: 12px;
    padding: 3.5px 6px;
    border-radius: 3px;
    line-height: 1;
    border: 1px solid var(--theme-border);
    box-shadow: 0 1px var(--theme-border);
    background-color: var(--theme-bg-component);
  }

  &-modal {
    padding: 0;
    user-select: none;
  }
}
</style>
