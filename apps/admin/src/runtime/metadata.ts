import type { RouteRecordRaw } from 'vue-router/auto'

import { cloneDeep } from 'es-toolkit/compat'

export interface IMetadataStoreDefinition {
  id: string
  name: string
  workspace?: string
  module?: string
}

export type IModuleMeta = IMetadataStoreDefinition

export const useMetaData = defineStore('metadata', () => {
  /**
   * 元数据
   */
  const metadata = ref<IMetadataStoreDefinition[]>([])

  /**
   * 已排序
   */
  const sorted = computed(() => {
    return metadata.value.sort(
      (a, b) => a.id.localeCompare(b.id),
    )
  })

  /**
   * 获取元数据
   *
   * @param id 标识
   * @returns IModuleMeta
   */
  function getMetadata(id: string) {
    return metadata.value.find(m => m.id === id)
  }

  /**
   * 设置元数据
   *
   * @param meta 元数据
   */
  function setMetadata(meta: IMetadataStoreDefinition) {
    if (metadata.value.some(m => m.id === meta.id))
      throw new Error(`元数据 "${meta.id}" 已存在.`)

    metadata.value.push(meta)
  }

  /**
   * 扩展路由 Meta 信息
   *
   * @param routes RouteRecordRaw[]
   * @param parentPath string
   * @returns RouteRecordRaw[]
   */
  function extendRoutesMeta(routes: Readonly<RouteRecordRaw[]>, parentPath = ''): RouteRecordRaw[] {
    const extendsRoutes: RouteRecordRaw[] = []
    const _parentPath = parentPath

    routes.forEach((_) => {
      const route = cloneDeep(_)
      const meta = metadata.value.find((m) => {
        if ((route.path === '' && !route.children) || route.path === '/')
          return false

        const path = toPath(m.id)

        if (
          (route.path.startsWith('/') && !route.path.startsWith('/['))
          || (route.name && route.name.toString().startsWith('/'))
        ) {
          return path === route.name
            || `${path}/` === route.name
            || path === route.path
        }

        return path === `${parentPath}/${route.path}`
      })

      if (meta) {
        parentPath += route.path.startsWith('/') ? route.path : `/${route.path}`

        route.meta = {
          ...route.meta,
          ...meta,
        }
      }

      if (route.children && route.children.length)
        route.children = extendRoutesMeta(route.children, parentPath)

      parentPath = meta ? _parentPath : ''

      extendsRoutes.push(route)
    })

    return extendsRoutes
  }

  return {
    metadata: sorted,
    getMetadata,
    setMetadata,
    extendRoutesMeta,
  }
})
