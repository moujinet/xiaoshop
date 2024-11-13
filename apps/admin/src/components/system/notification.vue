<script lang="ts" setup>
defineOptions({
  name: 'SystemNotification',
})

const unread = ref(1)
const visible = ref(false)

const tooltip = computed(() => {
  if (unread.value > 0) {
    return `您有 ${unread.value} 条未读消息`
  }
  return '暂无消息'
})
</script>

<template>
  <a-tooltip :default-popup-visible="unread > 0" :content="tooltip" position="br" mini>
    <a-badge :count="unread" dot>
      <div
        class="clickable text-5 p-1 inline-flex"
        :class="unread === 0 ? 'color-$theme-comment' : 'color-$theme-primary'"
        @click="visible = true"
      >
        <UiIcon name="chat-4" :active="unread > 0" />
      </div>
    </a-badge>
  </a-tooltip>

  <SystemNotificationDrawer v-model:visible="visible" />
</template>
