<script lang="ts" setup>
defineOptions({
  name: 'SystemColorSchemaSwitch',
})
</script>

<template>
  <UiIndicator
    :icon="isDark ? 'sun' : 'moon'"
    :active="isDark"
    tooltip="切换模式"
    @click="toggleDark()"
  />
</template>
