<script lang="ts" setup>
defineOptions({
  name: 'PageNotFound',
})
</script>

<template>
  <UiEmpty type="notfound">
    <div class="flex-(~ col v-center)">
      <h3 class="text-(title-lg text-1) mt-8 mb-0">
        这个页面走丢了
      </h3>

      <p class="mb-8">
        世界辣么大，该去哪里找呢？
      </p>

      <a-button type="primary" size="large" @click="$router.back()">
        返回
      </a-button>
    </div>
  </UiEmpty>
</template>

<style lang="less">
#app {
  height: 100%;
}
</style>

<route lang="yaml">
meta:
  layout: empty
</route>
