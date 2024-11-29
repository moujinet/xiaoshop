import type { IDefineModuleOptions, IModuleStoreDefinition } from './module'

import { useMetaData } from './metadata'
import { DEFAULT_WORKSPACES } from './constants'

export interface IWorkspaceStoreDefinition {
  id: string
  name: string
  desc?: string
  icon?: string
  sort?: number
  hidden?: boolean
  modules: IModuleStoreDefinition[]
}

export const useWorkspace = defineStore('workspaces', () => {
  /**
   * 工作区
   */
  const workspaces = ref<IWorkspaceStoreDefinition[]>(DEFAULT_WORKSPACES)

  const initd = ref(false)

  const { setMetadata } = useMetaData()

  /**
   * 已排序
   */
  const sorted = computed(() => {
    return workspaces.value.sort(
      (ws1, ws2) => (ws1.sort || 0) - (ws2.sort || 0),
    )
  })

  /**
   * 已激活
   */
  const activated = computed(() => {
    return sorted.value.filter(ws => !ws.hidden)
  })

  /**
   * 查找指定 ID 工作区
   *
   * @param workspaceId
   * @returns IWorkspaceStoreDefinition
   */
  function find(workspaceId: string) {
    return workspaces.value.find(ws => ws.id === workspaceId)
  }

  /**
   * 安装模块
   *
   * @param workspaceId 工作区 ID
   * @param module 模块定义
   */
  function installModule(
    workspaceId: string,
    module: IDefineModuleOptions,
  ) {
    const workspace = find(workspaceId)

    if (!workspace)
      throw new Error(`工作区 "${workspaceId}" 不存在.`)

    if (workspace.modules.some(ws => ws.id === module.id))
      throw new Error(`模块 "${module.id}" 已存在.`)

    const newModule: IModuleStoreDefinition = {
      id: `${workspace.id}.${module.id}`,
      name: module.name || '',
      desc: module.desc || '',
      icon: module.icon || '',
      version: module.version || '1.0.0',
      sort: module.sort || workspace.modules.length + 1,
    }

    workspace.modules.push(newModule)

    setMetadata({
      id: newModule.id,
      name: newModule.name,
      workspace: workspace.id,
    })

    return newModule
  }

  if (!initd.value) {
    workspaces.value.forEach((ws) => {
      setMetadata({
        id: ws.id,
        name: ws.name,
      })
    })
  }

  return {
    workspaces: activated,
    find,
    installModule,
  }
})
