<script lang="ts" setup>
defineOptions({
  name: 'SystemNotificationItem',
})

defineProps<{
  icon: string
  color: string
  title: string
  desc: string
  time: string
  isNew?: boolean
}>()
</script>

<template>
  <div class="flex p-4 gap-4 cursor-pointer hover:bg-$color-fill-1 b-b-(1 solid $color-border-1) last:b-0">
    <a-badge :count="isNew ? 1 : 0" dot>
      <div
        class="flex-(~ center) p-3 text-6 rounded ring-(1 white)"
        :class="`bg-${color}-light`"
      >
        <UiIcon :name="icon" :color="color" />
      </div>
    </a-badge>

    <div class="flex-(~ col 1 between)">
      <div class="flex-(~ 1 v-center between)">
        <a-typography-text class="flex-1 mb-0!" bold ellipsis>
          {{ title }}
        </a-typography-text>
        <small class="c-$theme-placeholder">
          {{ timeAgo(time) }}
        </small>
      </div>

      <a-typography-paragraph class="mb-0!" type="secondary" ellipsis>
        {{ desc }}
      </a-typography-paragraph>
    </div>
  </div>
</template>
