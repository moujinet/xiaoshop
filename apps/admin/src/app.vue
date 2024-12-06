<script lang="ts" setup>
import {
  DEFAULT_ICON_ACTIVE,
  DEFAULT_ICON_SET,
  DEFAULT_ICON_SUFFIX,
} from './constants/defaults'

/**
 * 默认图标集设置
 *
 * @see {@link https://icones.js.org/collection/mingcute?variant=Line}
 */
provide('ICON_SET', DEFAULT_ICON_SET)
provide('ICON_DEFAULT_SUFFIX', DEFAULT_ICON_SUFFIX)
provide('ICON_ACTIVE_SUFFIX', DEFAULT_ICON_ACTIVE)
</script>

<template>
  <RouterView />
</template>
