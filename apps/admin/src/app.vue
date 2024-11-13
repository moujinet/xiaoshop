<script lang="ts" setup>
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
import { DEFAULT_ICON_ACTIVE_SUFFIX, DEFAULT_ICON_SET, DEFAULT_ICON_SUFFIX } from './constants/defaults'

defineOptions({
  name: 'App',
})

/**
 * 默认图标集设置
 *
 * @see {@link https://icones.js.org/collection/mingcute?variant=Line}
 */
provide('ICON_SET', DEFAULT_ICON_SET)
provide('ICON_DEFAULT_SUFFIX', DEFAULT_ICON_SUFFIX)
provide('ICON_ACTIVE_SUFFIX', DEFAULT_ICON_ACTIVE_SUFFIX)
</script>

<template>
  <a-config-provider :locale="zhCN" update-at-scroll>
    <template #empty>
      <UiEmpty />
    </template>

    <router-view />
  </a-config-provider>
</template>
