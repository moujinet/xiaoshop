<script lang="ts" setup>
import type { IModuleStoreDefinition } from '#/module'

defineOptions({
  name: 'SystemActivityIndicator',
})

defineProps<{
  modules: IModuleStoreDefinition[]
  active?: string
  collapse?: boolean
}>()

defineEmits(['click', 'collapse'])
</script>

<template>
  <div class="activity-indicator">
    <div class="flex-(~ col between) p-y-2 h-full">
      <div class="w-full">
        <SystemActivityIndicatorIcon
          v-for="mod in modules"
          :key="mod.id"
          :icon="mod.icon"
          :tooltip="mod.desc || mod.name"
          :active="mod.id === active"
          @click="$emit('click', mod.id)"
        />
      </div>

      <Transition name="zoom-in">
        <SystemActivityIndicatorIcon
          v-if="collapse && modules.length > 0"
          icon="layout-leftbar-open"
          tooltip="展开侧边栏"
          mini
          @click="$emit('collapse')"
        />
      </Transition>
    </div>
  </div>
</template>

<style>
.activity-indicator {
  @apply w-$indicator-width bg-$indicator-bg b-(width-$indicator-border-width c-$indicator-border-color) z-1;
}
</style>
