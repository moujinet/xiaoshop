import {
  type IModule,
  type IModuleDefinition,
  useMetaData,
} from './module'

export interface ISpace {
  id: string
  name: string
  modules: IModule[]
  icon?: string
  desc?: string
  path?: string
  sort?: number
  hidden?: boolean
}

const DEFAULT_SPACES: ISpace[] = [
  { id: 'shop', name: '店铺', desc: '店铺管理', icon: 'store', modules: [], sort: 1 },
  { id: 'app', name: '应用', desc: '应用管理', icon: 'classify-3', modules: [], sort: 2 },
  { id: 'manage', name: '系统', desc: '系统管理', icon: 'settings-6', modules: [], sort: 99 },
  { id: 'built-in', name: '', desc: '', icon: '', modules: [], sort: 999, hidden: true },
]

/**
 * 用户空间
 */
export const useSpace = defineStore('space', () => {
  /**
   * 用户空间s
   */
  const spaces = ref<ISpace[]>(DEFAULT_SPACES)

  /**
   * 当前空间
   */
  const current = ref<string>('shop')

  /**
   * 初始化
   */
  const initd = ref(false)

  if (!initd.value) {
    const metadata = useMetaData()

    spaces.value.forEach((space) => {
      metadata.push({
        id: space.id,
        name: space.name,
      })
    })

    initd.value = true
  }

  /**
   * 激活的空间
   */
  const activated = computed(
    () => spaces.value
      .filter(s => !s.hidden)
      .sort((a, b) => (a.sort || 0) - (b.sort || 0)),
  )

  /**
   * 检查空间是否存在
   *
   * @param id 空间标识
   * @returns boolean
   */
  function exists(id: string) {
    return spaces.value.some(s => s.id === id)
  }

  /**
   * 获取指定空间
   *
   * @param id 空间标识
   * @returns ISpace
   */
  function getSpace(id: string) {
    return spaces.value.find(s => s.id === id)
  }

  /**
   * 获取当前空间
   *
   * @returns ISpace
   */
  function currentSpace() {
    return getSpace(current.value)
  }

  /**
   * 载入模块
   *
   * @param spaceId 空间标识
   * @param module 模块定义
   */
  function load(spaceId: string, module: IModuleDefinition) {
    const space = getSpace(spaceId)

    if (!space)
      throw new Error(`空间 ${spaceId} 不存在.`)

    if (space.modules.some(m => m.id === module.id))
      throw new Error(`模块 ${module.id} 已存在.`)

    const newModule: IModule = {
      id: `${spaceId}-${module.id}`,
      space: spaceId,
      name: module.name,
      desc: module.desc || '',
      icon: module.icon || '',
      path: module.path || '',
      version: module.version || '1.0.0',
      sort: module.sort || space.modules.length + 1,
    }

    space.modules.push(newModule)

    return newModule
  }

  return {
    current,
    activated,
    load,
    exists,
    getSpace,
    currentSpace,
  }
})
