<script lang="ts" setup>
import { useDebounceFn, useEventListener } from '@vueuse/core'

defineOptions({
  name: 'SystemNotificationDrawer',
})

const containerRef = ref<HTMLElement | null>(null)
const containerHeight = ref(0)
const loading = ref(true)

const onResize = useDebounceFn(() => {
  containerHeight.value = containerRef.value?.scrollHeight
    ? containerRef.value?.scrollHeight - 1
    : 0
})

function onOpen() {
  onResize()

  nextTick(() => {
    loading.value = false

    setTimeout(() => {
      containerRef.value?.classList.remove('overflow-hidden')
    }, 350)
  })
}

onMounted(() => {
  useEventListener(window, 'resize', onResize)
})

const notifications = [
  { id: 1, scene: { value: '系统消息', key: 1, color: 'arcoblue', icon: 'settings-3' }, status: { value: '未读', key: 0, color: 'arcoblue' }, title: '这是一条系统消息', content: '这里是消息详情', extras: {}, sentTime: '2024-11-10 12:00:00' },
  { id: 2, scene: { value: '云链消息', key: 1, color: 'purple', icon: 'cloud' }, status: { value: '未读', key: 0, color: 'arcoblue' }, title: '这是一条云链消息', content: '这里是消息详情', extras: {}, sentTime: '2022-10-10 12:00:00' },
  { id: 3, scene: { value: '订单消息', key: 1, color: 'orangered', icon: 'shopping-cart-1' }, status: { value: '未读', key: 0, color: 'arcoblue' }, title: '这是一条订单消息', content: '这里是消息详情', extras: {}, sentTime: '2022-10-10 12:00:00' },
  { id: 4, scene: { value: '售后消息', key: 1, color: 'cyan', icon: 'bill-2' }, status: { value: '未读', key: 0, color: 'arcoblue' }, title: '这是一条售后消息', content: '这里是消息详情', extras: {}, sentTime: '2022-10-10 12:00:00' },
  { id: 5, scene: { value: '营销消息', key: 1, color: 'pinkpurple', icon: 'gift' }, status: { value: '未读', key: 0, color: 'arcoblue' }, title: '这是一条营销消息', content: '这里是消息详情这里是消息详情这里是消息详情这里是消息详情这里是消息详情', extras: {}, sentTime: '2022-10-10 12:00:00' },
]
</script>

<template>
  <a-drawer
    :closable="false"
    :header="false"
    :footer="false"
    :width="340"
    class="system-notification-drawer"
    unmount-on-close
    @open="onOpen"
  >
    <div class="p-4 b-b-(1 solid $theme-border)">
      <div class="flex-(~ v-center gap-2) text-4 font-bold">
        <UiIcon name="chat-4" class="text-5" color="primary" :loading="loading" />
        消息中心
      </div>
    </div>

    <div ref="containerRef" class="flex-1 overflow-hidden">
      <Transition name="zoom-in">
        <UiEmpty v-if="notifications.length === 0 || loading" desc="暂无消息" />
      </Transition>

      <a-scrollbar v-if="!loading" class="overflow-auto" :style="{ height: `${containerHeight}px` }">
        <SystemNotificationItem
          v-for="item in notifications"
          :key="item.id"
          :icon="item.scene.icon"
          :color="item.scene.color"
          :title="item.title"
          :desc="item.content"
          :time="item.sentTime"
          :is-new="item.status.key === 0"
        />
      </a-scrollbar>
    </div>

    <div class="flex-(~ v-center between) text-3 p-(x-4 y-3) bg-$color-fill-1 b-t-(1 solid $theme-border)">
      <UiLink>
        设为已读
      </UiLink>

      <UiLink suffix-icon="arrows-right">
        查看全部
      </UiLink>
    </div>
  </a-drawer>
</template>

<style lang="less">
.system-notification-drawer {
  user-select: none;

  .arco-drawer {
    &-body {
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
