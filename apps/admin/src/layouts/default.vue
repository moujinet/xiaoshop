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

        <div class="layout-footer">
          <div class="layout-footer__children">
            <div class="layout-footer__copyright">
              <IconBrandLogo />
              <small>
                &copy; {{ new Date().getFullYear() }} XiaoShop All Rights Reserved.
              </small>
            </div>

            <a-space class="layout-footer__links">
              <template #split>
                <a-divider direction="vertical" />
              </template>

              <router-link to="/">
                技术支持
              </router-link>

              <router-link to="/">
                意见反馈
              </router-link>

              <router-link to="/">
                <a-badge :count="1" :offset="[4, -4]" dot>
                  版本更新
                </a-badge>
              </router-link>
            </a-space>
          </div>
        </div>
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

  &-footer {
    height: var(--layout-footer-height);

    &__children {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 var(--page-gap);
      color: var(--theme-comment);
    }

    &__copyright {
      display: flex;
      align-items: center;

      small {
        text-transform: uppercase;
        margin-left: var(--page-gap-sm);
      }
    }

    &__links {
      a {
        font-size: 12px;
        text-decoration: none;
        color: var(--theme-comment);

        &:hover {
          color: var(--theme-text);
        }
      }
    }
  }
}
</style>
