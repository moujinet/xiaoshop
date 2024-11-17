<script lang="ts" setup>
defineOptions({
  name: 'SystemFooter',
})
</script>

<template>
  <div class="system-footer">
    <div class="system-footer__children">
      <div class="system-footer__copyright">
        <IconBrandLogo />
        <small>
          &copy; {{ new Date().getFullYear() }} XiaoShop All Rights Reserved.
        </small>
      </div>

      <a-space class="system-footer__links">
        <template #split>
          <a-divider direction="vertical" />
        </template>

        <router-link to="/">
          技术支持
        </router-link>

        <router-link to="/">
          社区反馈
        </router-link>

        <router-link to="/">
          体验专业版
        </router-link>
      </a-space>
    </div>
  </div>
</template>

<style lang="less">
.system-footer {
    height: var(--layout-footer-height);

    &__children {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
</style>
