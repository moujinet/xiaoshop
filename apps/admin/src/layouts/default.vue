<script lang="ts" setup>
defineOptions({
  name: 'DefaultLayout',
  inheritAttrs: false,
})

const route = useRoute()
const collapse = usePreference('collapseActivity')
</script>

<template>
  <main class="layout" :class="collapse && 'is-collapsed'">
    <aside class="layout-sidebar">
      <div class="layout-sidebar--inner">
        <div class="layout-sidebar__header">
          <SystemConnector v-if="!collapse" />
          <SystemBrand logo="/assets/img/logo.png" name="XiaoShop" title="XiaoShop 管理后台" :simple="collapse" />
        </div>
        <div class="layout-sidebar__content">
          <SystemActivity v-model:collapse="collapse" />
        </div>
      </div>
    </aside>

    <div class="layout-main">
      <div class="layout-toolbar">
        <div class="layout-toolbar--inner">
          <a-space size="mini">
            <SystemWorkspaceSwitch />

            <a-breadcrumb v-if="route.meta" class="layout-breadcrumb">
              <template v-for="item in route.matched.filter(r => r.meta.id)" :key="item.name">
                <a-breadcrumb-item>
                  {{ item.meta.name }}
                </a-breadcrumb-item>
              </template>
            </a-breadcrumb>
          </a-space>

          <a-space size="mini">
            <template #split>
              <a-divider direction="vertical" />
            </template>

            <SystemSearch />

            <a-space>
              <SystemColorSchemaSwitch />
              <SystemPreviewer />
            </a-space>

            <a-space>
              <SystemUsermenu />
              <SystemNotification />
            </a-space>
          </a-space>
        </div>
      </div>

      <div class="layout-content">
        <UiScrollbar>
          <div class="layout-content--inner">
            <RouterView />
          </div>
        </UiScrollbar>
      </div>
    </div>
  </main>
</template>

<style>
.layout {
  @apply flex h-svh text-body bg-$layout-bg;

  &-sidebar {
    @apply h-svh fixed top-0 left-0 z-1 flex-(~ col) overflow-(x-hidden y-auto) b-(solid border)
    w-$sidebar-width bg-$sidebar-bg b-width-$sidebar-border-width shadow-$sidebar-shadow transition-width;

    &--inner {
      @apply flex-(~ grow col) overflow-hidden;
    }

    &__header {
      @apply flex-(~ v-center) b-(solid border)
      h-$sidebar-header-height bg-$sidebar-header-bg b-width-$sidebar-header-border-width;
    }

    &__content {
      @apply flex-(~ grow);
    }
  }

  &-main {
    @apply flex-(~ col) w-full flex-grow overflow-hidden relative p-l-$sidebar-width transition-width;
  }

  &-toolbar {
    @apply sticky w-full max-w-full top-0 left-0 overflow-hidden b-(solid border)
    h-$toolbar-height bg-$toolbar-bg b-width-$toolbar-border-width;

    &--inner {
      @apply flex-(~ v-center between) h-full px-6;
    }

    &::before,
    &::after {
      @apply absolute content-[''] block size-full top-0 left-0;
    }

    &::before {
      z-index: -2;
      background: linear-gradient(
        to bottom,
        rgba(var(--bg-body) / 100%),
        rgba(var(--bg-body) / 73.8%) 19%,
        rgba(var(--bg-body) / 54.1%) 34%,
        rgba(var(--bg-body) / 38.2%) 47%,
        rgba(var(--bg-body) / 27.8%) 56.5%,
        rgba(var(--bg-body) / 19.4%) 65%,
        rgba(var(--bg-body) / 12.6%) 73%,
        rgba(var(--bg-body) / 7.5%) 80.2%,
        rgba(var(--bg-body) / 4.2%) 86.1%,
        rgba(var(--bg-body) / 2.1%) 91%,
        rgba(var(--bg-body) / 0.8%) 97.2%,
        rgba(var(--bg-body) / 0.2%) 99.2%,
        rgba(var(--bg-body) / 0%)
      );
    }

    &::after {
      z-index: -3;
      backdrop-filter: blur(20px);
      mask-image: linear-gradient(
        to bottom,
        #000,
        #000000f5 70%,
        #000c 80%,
        #0000
      );
    }
  }

  &-content {
    @apply flex-1;

    &--inner {
      @apply p-$layout-content-padding;
    }
  }

  &-breadcrumb {
    .arco-breadcrumb-item {
      color: var(--color-text-4);
    }
  }

  &.is-collapsed {
    .layout-sidebar {
      @apply w-$sidebar-collapsed-width;
    }

    .layout-main {
      @apply p-l-$sidebar-collapsed-width;
    }
  }
}
</style>
