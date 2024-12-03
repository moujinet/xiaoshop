<script lang="ts" setup>
defineOptions({
  name: 'SystemWorkspaceSwitch',
})

const app = useApp()
const { workspaceId, workspace } = storeToRefs(app)
const { workspaces } = useWorkspace()

function onSelect(wsId: string) {
  app.setWorkspaceModule(wsId)
}
</script>

<template>
  <UiDropdown
    :label="workspace?.name || '个人中心'"
    :icon="workspace?.icon || 'home-1'"
    :options="workspaces"
    :selected="workspaceId"
    @select="onSelect"
  />
</template>
