export interface IModuleMeta {
  id: string
  name: string
  space?: string
  module?: string
}

/**
 * 元数据
 */
export const useMetaData = defineStore('meta', () => {
  /**
   * 元数据
   */
  const metadata = ref<IModuleMeta[]>([])

  /**
   * 获取指定元数据
   *
   * @param id 标识
   * @returns IModuleMeta
   */
  function get(id: string) {
    return metadata.value.find(m => m.id === id)
  }

  /**
   * 写入元数据
   *
   * @param meta 元数据
   */
  function push(meta: IModuleMeta) {
    metadata.value.push(meta)
  }

  return {
    metadata: computed(
      () => metadata.value.sort(
        (a, b) => a.id.localeCompare(b.id),
      ),
    ),
    get,
    push,
  }
})
