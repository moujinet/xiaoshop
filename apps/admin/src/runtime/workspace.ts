import type { IModule } from './module'

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useMetaData } from './metadata'
import { DEFAULT_WORKSPACE_ID, DEFAULT_WORKSPACES } from './config/defaults'

export interface IWorkspace {
  id: string
  name: string
  desc?: string
  icon?: string
  sort?: number
  hidden?: boolean
  modules?: IModule[]
}

export const useWorkspace = defineStore('workspace', () => {
  const {
    setMetadata,
  } = useMetaData()

  const initd = ref(false)

  const current = ref<IWorkspace | null>(null)

  const currentModule = ref<IModule | null>(null)

  const workspaces = ref<IWorkspace[]>([])

  const sorted = computed(() => {
    return workspaces.value.sort(
      (ws1, ws2) => (ws1.sort || 99) - (ws2.sort || 99),
    )
  })

  const activated = computed(() => {
    return sorted.value.filter(ws => !ws.hidden)
  })

  const loadedModules = computed<IModule[]>(() => {
    return current.value?.modules || []
  })

  function getWorkspace(wsId: string): IWorkspace | null {
    return workspaces.value.find(ws => ws.id === wsId) || null
  }

  function switchTo(wsId?: string, moduleId?: string) {
    if (!current.value || wsId !== current.value.id)
      current.value = getWorkspace(wsId || DEFAULT_WORKSPACE_ID) || null

    const leadModuleId = loadedModules.value.length ? loadedModules.value[0].id : ''

    currentModule.value = moduleId
      ? current.value?.modules?.find(
        m => m.id === moduleId || leadModuleId,
      ) || null
      : null
  }

  function createWorkspace(workspace: IWorkspace) {
    if (!workspace.id)
      throw new Error(`工作区 ID 必须指定.`)

    if (workspaces.value.some(ws => ws.id === workspace.id))
      throw new Error(`工作区 "${workspace.id}" 已存在.`)

    workspaces.value.push(workspace)

    setMetadata({
      id: workspace.id,
      name: workspace.name,
      desc: workspace.desc,
      icon: workspace.icon,
    })
  }

  if (!initd.value) {
    initd.value = true

    DEFAULT_WORKSPACES.forEach(createWorkspace)
  }

  return {
    activated,
    all: computed(() => sorted.value),
    current: computed(() => current.value),
    currentId: computed(() => current.value?.id || ''),
    currentModule: computed(() => currentModule.value),
    currentModuleId: computed(() => currentModule.value?.id || ''),
    currentModuleMenus: computed(() => currentModule.value?.menus || []),
    loadedModules: computed(() => loadedModules.value),
    createWorkspace,
    getWorkspace,
    switchTo,
  }
})
