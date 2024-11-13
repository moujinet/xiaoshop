<script lang="ts" setup>
defineOptions({
  name: 'SystemLayout',
})
</script>

<template>
  <div class="layout">
    <div class="layout-header">
      <div class="layout-header__start">
        <Connector />
        <SystemLogo src="/assets/img/logo.png" name="XiaoShop" title="XiaoShop" />
      </div>

      <div class="layout-header__nav">
        <SystemSpace />
      </div>

      <div class="layout-header__end">
        <SystemSearch />
        <a-divider direction="vertical" />
        <SystemUsermenu />
        <a-divider direction="vertical" />
        <SystemToolbar />
      </div>
    </div>

    <div class="layout-main">
      <SystemActivity />

      <div class="layout-main__children">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="less">
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--theme-bg-main);

  &-header {
    top: 0;
    left: 0;
    z-index: 100;
    position: sticky;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: var(--layout-header-height);
    background-color: var(--theme-bg-panel);
    border-bottom: 1px solid var(--theme-border);

    &__start {
      display: flex;
      align-items: center;
      width: calc(var(--layout-activity-width) + var(--layout-sidebar-width));
    }

    &__nav {
      flex: 1;
    }

    &__end {
      display: flex;
      align-items: center;
      padding-right: var(--page-gap);
    }
  }

  &-main {
    flex: 1;
    display: flex;

    &__children {
      flex: 1;
      display: flex;
    }
  }
}
</style>
