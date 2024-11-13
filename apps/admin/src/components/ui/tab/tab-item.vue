<script lang="ts" setup>
defineOptions({
  name: 'UiTabItem',
})

defineProps<{
  name: string
  icon?: string
  tooltip?: string
}>()

const current = getCurrentInstance()
const activeKey = inject<Ref<string>>('UI_TAB_ACTIVE_KEY')!
const isActive = computed(() => activeKey.value === current?.vnode.key)

function handleClick() {
  if (activeKey.value === current?.vnode.key)
    return

  activeKey.value = current?.vnode.key as string
}
</script>

<template>
  <li class="ui-tab-item" :class="{ 'is-active': isActive }" @click="handleClick">
    <a-tooltip :disabled="tooltip ? false : true" :content="tooltip" mini>
      <div class="flex-(~ v-center) p-(l-3 r-4 y-1.5) gap-2 cursor-pointer transition-colors">
        <UiIcon v-if="icon" :name="icon" class="ui-tab-item__icon" />
        {{ name }}
      </div>
    </a-tooltip>
  </li>
</template>
