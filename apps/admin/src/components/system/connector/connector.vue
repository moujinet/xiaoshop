<script lang="ts" setup>
defineOptions({
  name: 'SystemConnector',
})

function onClick() {
  useMessage({
    duration: 3000,
    closable: false,
  }).info('开发中...')
}
</script>

<template>
  <div class="flex-(~ center) size-$indicator-width bg-$connector-bg box-content b-r-(1 solid border)">
    <UiIndicator icon="dot-grid" active @click="onClick" />
  </div>
</template>
