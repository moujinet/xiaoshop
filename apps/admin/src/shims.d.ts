import 'vue-router/auto'
import type { IMetaData } from '#/metadata'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module 'vue' {
  interface ComponentCustomProperties {
    /**
     * 检查用户权限
     *
     * @param permissions string[]
     * @returns boolean
     */
    $permission: (permissions: string[]) => boolean
  }
}

declare module 'vue-router' {
  interface RouteMeta extends Partial<IMetaData> {
    isLayout?: boolean
  }
}

declare global {
  interface ImportMetaEnv {
    VITE_BASE_URL: string
    VITE_APP_NAME: string
    VITE_APP_NAME_SHORT: string
    VITE_API_BASE_URL: string
    VITE_API_REQUEST_TIMEOUT: number
    VITE_ENABLE_DEVTOOL: string
  }

  declare const __VERSION__: string
  declare const __HOMEPAGE__: string
  declare const __REPOSITORY__: string

  import type { MaybeRef } from 'vue'

  type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T)
}
