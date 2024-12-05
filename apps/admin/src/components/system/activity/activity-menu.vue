<script lang="ts" setup>
import { type IModuleMenuStoreDefinition, ModuleMenuType } from '#/menu'

defineOptions({
  name: 'SystemActivityMenu',
})

defineProps<{
  menus: IModuleMenuStoreDefinition[]
  collapse?: boolean
  active?: string
}>()

defineEmits(['click'])
</script>

<template>
  <div class="activity-menu-panel">
    <UiScrollbar>
      <div class="p-(x-3 y-2.5)" :class="collapse && 'hidden'">
        <div v-for="menu in menus" :key="menu.id">
          <SystemActivityMenuItem
            v-if="menu.type === ModuleMenuType.PAGE"
            :icon="menu.icon"
            :label="menu.name"
            :active="menu.id === active"
            @click="$emit('click', menu.id)"
          />

          <template v-else>
            <SystemActivityMenuGroup :icon="menu.icon" :name="menu.name">
              <SystemActivityMenuItem
                v-for="child in menu.children" :key="child.id"
                :icon="child.icon"
                :label="child.name"
                :active="child.id === active"
                @click="$emit('click', child.id)"
              />
            </SystemActivityMenuGroup>
          </template>
        </div>
      </div>
    </UiScrollbar>
  </div>
</template>

<style>
.activity-menu-panel {
  @apply flex-1 bg-$panel-bg b-l-(solid color-border width-$panel-border-width) select-none;
}
</style>
