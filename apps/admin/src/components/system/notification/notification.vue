<script lang="ts" setup>
defineOptions({
  name: 'SystemNotification',
})

const unread = ref(1)

const tooltip = computed(() => {
  if (unread.value > 0) {
    return `您有 ${unread.value} 条未读消息`
  }
  return '暂无消息'
})
</script>

<template>
  <UiIndicator
    icon="chat-4"
    position="br"
    active-class="c-primary hover:c-primary"
    :badge="unread"
    :tooltip="tooltip"
    :default-tooltip-visible="unread > 0"
    :active="unread > 0"
  />
</template>
