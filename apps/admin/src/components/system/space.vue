<script lang="ts" setup>
defineOptions({
  name: 'SystemSpace',
})

const manager = useSpace()
const { activated, current } = storeToRefs(manager)
</script>

<template>
  <UiTab v-model:active-key="current">
    <UiTabItem
      v-for="space in activated"
      :key="space.id"
      :icon="space.icon"
      :name="space.name"
    />
  </UiTab>
</template>
