<script lang="ts" setup>
defineOptions({
  name: 'SystemActivity',
  inheritAttrs: false,
})

const app = useApp()
const route = useRoute()
const router = useRouter()

const {
  workspaceId,
  moduleId,
  modules,
  moduleMenus,
} = storeToRefs(app)

const collapse = defineModel<boolean>('collapse')

const currentMenuId = computed(() => route.meta.id)

watch(
  () => route.path + workspaceId.value,
  () => {
    if (!route.meta)
      return

    if (route.meta.module !== moduleId.value)
      collapse.value = moduleMenus.value.length === 0
  },
  { immediate: true },
)

function onIndicatorClick(modId: string) {
  if (modId === moduleId.value) {
    collapse.value = !collapse.value
  }
  else {
    app.setWorkspaceModule(workspaceId.value, modId)
    collapse.value = moduleMenus.value.length === 0
  }
}

function onMenuClick(menuId: string) {
  try {
    router.push({
      name: toPath(menuId) as any,
    })
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (e) {
    router.push({
      path: toPath(menuId),
    })
  }
}
</script>

<template>
  <div class="flex-(~ 1)">
    <SystemActivityIndicator
      :modules="modules || []"
      :active="moduleId"
      :collapse="collapse"
      @click="onIndicatorClick"
      @collapse="collapse = false"
    />

    <SystemActivityMenu
      v-if="moduleMenus.length"
      :menus="moduleMenus"
      :active="currentMenuId"
      :collapse="collapse"
      @click="onMenuClick"
    />
  </div>
</template>
