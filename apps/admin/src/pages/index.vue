<script lang="ts" setup>
defineOptions({
  name: 'IndexPage',
})

const loading = ref(false)
</script>

<template>
  <div class="leading-none">
    <button class="p-(x-3 y-4) rounded bg-indigo-6 text-white" @click="loading = !loading">
      Toggle Loading {{ loading }}
    </button>
  </div>

  <UiIcon name="alipay" color="blue" :loading="loading" active />
</template>
