<script lang="ts" setup>
defineOptions({
  name: 'SystemLogo',
  inheritAttrs: false,
})

defineProps<{
  name: string
  title?: string
  src?: string
}>()
</script>

<template>
  <router-link class="system-logo" to="/" :title="title">
    <img v-if="src" :src="src">
    <h1 class="font-logo">
      {{ name }}
    </h1>
  </router-link>
</template>

<style lang="less">
.system-logo {
  display: flex;
  align-items: center;
  user-select: none;
  text-decoration: none;
  margin-left: var(--page-gap);

  img {
    width: 20px;
    height: 20px;
    margin-right: var(--page-gap-sm);
  }

  h1 {
    padding: 0;
    line-height: 1;
    font-size: 17px;
    letter-spacing: -1px;
    text-transform: uppercase;
    color: var(--theme-title);
  }
}
</style>
