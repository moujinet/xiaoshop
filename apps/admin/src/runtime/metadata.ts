import type { RouteRecordRaw } from 'vue-router'

import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'es-toolkit/compat'
import { toPath } from './utils'

export interface IMetaData {
  id: string
  name: string
  desc?: string
  icon?: string
  workspace?: string
  module?: string
}

export const useMetaData = defineStore('metadata', () => {
  const metadata = ref<IMetaData[]>([])

  const sorted = computed(() => {
    return metadata.value.sort(
      (a, b) => a.id.localeCompare(b.id),
    )
  })

  function setMetadata(meta: IMetaData) {
    if (metadata.value.some(m => m.id === meta.id))
      throw new Error(`元数据 "${meta.id}" 已存在.`)

    metadata.value.push(meta)
  }

  function extendRoutes(routes: Readonly<RouteRecordRaw[]>, parentPath = ''): RouteRecordRaw[] {
    const extended: RouteRecordRaw[] = []
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
        route.children = extendRoutes(route.children, parentPath)

      parentPath = meta ? _parentPath : ''

      extended.push(route)
    })

    return extended
  }

  return {
    metadata: sorted,
    setMetadata,
    extendRoutes,
  }
})
