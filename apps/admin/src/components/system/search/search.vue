<script lang="ts" setup>
defineOptions({
  name: 'SystemSearch',
})

const visible = ref(false)
const { metaSymbol } = useShortcuts()
</script>

<template>
  <div class="group flex-(~ v-center between) p-(x-3 y-2) w-50 lt-lg:w-10 transition-width bg-bg-1 rounded cursor-pointer" @click="visible = !visible">
    <div class="flex-(~ v-center) gap-2 text-disable group-hover:text-info">
      <UiIcon name="search" class="text-4" />
      <span class="lt-lg:hidden">Search</span>
    </div>
    <div class="flex-(~ v-center) gap-0.5 lt-lg:hidden">
      <UiKbd>{{ metaSymbol }}</UiKbd>
      <UiKbd>K</UiKbd>
    </div>
  </div>
</template>
