<script lang="ts" setup>
defineOptions({
  name: 'SystemActivity',
})
</script>

<template>
  <SystemLayoutPanel class="w-$layout-activity-width select-none">
    <div class="pt-$page-gap-sm">
      <SystemActivityItem icon="box" :count="1" tooltip="You have 1 new order" active />
      <SystemActivityItem icon="shopping-cart-1" />
      <SystemActivityItem icon="vip-1" />
      <SystemActivityItem icon="truck" />
      <SystemActivityItem icon="message-4" />
    </div>
  </SystemLayoutPanel>
</template>
