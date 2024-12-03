<script lang="ts" setup>
defineOptions({
  name: 'UiDropdown',
})

defineProps<{
  label: string
  icon?: string
  selected?: string
  arrowDown?: string
  arrowRight?: string
  options?: Array<Record<string, any>>
}>()

const visible = ref(false)
</script>

<template>
  <a-dropdown v-model:popup-visible="visible" :popup-max-height="false">
    <div class="flex-(~ center) gap-3 p-(x-3 y-2) rounded cursor-pointer hover:bg-fill-2">
      <div class="flex-(~ center) gap-2 select-none text-body hover:text-title active:text-body">
        <UiIcon v-if="icon" :name="icon" class="text-(4 title)" active />
        <span>
          {{ label }}
        </span>
      </div>
      <slot name="arrow">
        <UiIcon :name="visible ? arrowDown || 'down' : arrowRight || 'right'" class="text-(3 info)" />
      </slot>
    </div>

    <template #content>
      <slot name="options">
        <a-doption v-for="option in options" :key="option.id" :value="option.id">
          <template v-if="option.icon" #icon>
            <UiIcon :name="option.icon" class="text-(4 $menu-icon-color)" />
          </template>
          <span>{{ option.desc || option.name }}</span>
          <UiIcon v-if="option.id === selected" name="check" class="text-(4 $menu-icon-active-color) m-l-4" inline />
        </a-doption>
      </slot>
    </template>
  </a-dropdown>
</template>
