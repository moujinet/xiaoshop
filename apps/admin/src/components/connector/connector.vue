<script lang="ts" setup>
defineOptions({
  name: 'Connector',
})

function onClick() {
  useMessage({
    duration: 3000,
    closable: false,
  }).info('开发中...')
}
</script>

<template>
  <div class="flex-(~ center) h-7 w-15 text-5 b-r-(1 solid $theme-border)">
    <div class="clickable p-1 inline-flex" @click="onClick">
      <UiIcon name="dot-grid" />
    </div>
  </div>
</template>
