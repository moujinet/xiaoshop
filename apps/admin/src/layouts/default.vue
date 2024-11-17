<script lang="ts" setup>
defineOptions({
  name: 'DefaultLayout',
})
</script>

<template>
  <SystemLayout>
    <div class="layout-default">
      <SystemSidebar>
        Sidebar
      </SystemSidebar>

      <div class="layout-content">
        <div class="layout-content__children">
          <router-view />
        </div>

        <SystemFooter />
      </div>
    </div>
  </SystemLayout>
</template>

<style lang="less">
.layout {
  &-default {
    flex: 1;
    display: flex;
  }

  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    &__children {
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
