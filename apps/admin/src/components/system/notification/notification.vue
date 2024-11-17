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
  <SystemToolbarIcon
    icon="chat-4"
    position="br"
    active-icon-class="color-$theme-primary"
    :badge="unread"
    :tooltip="tooltip"
    :default-tooltip-visible="unread > 0"
    :active-icon="unread > 0"
    @click="visible = true"
  />

  <SystemNotificationDrawer v-model:visible="visible" />
</template>
