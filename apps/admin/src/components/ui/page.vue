<script lang="ts" setup>
defineOptions({
  name: 'UiPage',
})

const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const route = useRoute()
const pageTitle = computed(() => props.title || route.meta.name)
</script>

<template>
  <div class="ui-page">
    <div class="ui-page-header">
      <div class="ui-page-header--main">
        <div class="ui-page-header__title">
          <slot name="title">
            {{ pageTitle }}
          </slot>
        </div>
        <div v-if="$slots.subtitle || subtitle" class="ui-page-header__subtitle">
          <slot name="subtitle">
            {{ subtitle }}
          </slot>
        </div>
      </div>
      <div v-if="$slots.actions" class="ui-page-header--actions">
        <slot name="actions" />
      </div>
    </div>

    <div v-if="$slots.extras" class="ui-page-extras">
      <slot name="extras" />
    </div>

    <div class="ui-page-content">
      <slot />
    </div>
  </div>
</template>

<style>
.ui-page {
  &-header {
    @apply flex-(~ between);

    &__title {
      @apply text-title-(~ 2) font-semibold;
    }

    &__subtitle {
      @apply text-(3.5 info) p-t-1;
    }

    &--main {
      @apply flex-(~ col);
    }
  }

  &-extras {
    @apply m-t-4;
  }

  &-content {
    @apply m-t-6 p-(x-5 y-7) bg-$panel-bg rounded;
  }
}
</style>
