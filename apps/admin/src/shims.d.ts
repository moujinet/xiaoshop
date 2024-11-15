import 'vue-router/auto'

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
  import type { IModuleMeta } from '~/runtime/module/meta'

  interface RouteMeta extends Partial<IModuleMeta> {
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

  import type { MaybeRef } from 'vue'

  type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T)
}
