import { useSessionStorage } from '@vueuse/core'

interface IUseSessionReturns {
  /**
   * 是否已登录
   */
  isLogin: ComputedRef<boolean>
  /**
   * 登录令牌
   */
  token: ComputedRef<string>
}

/**
 * 会话管理
 */
export function useSession(): IUseSessionReturns {
  const token = useSessionStorage('token', '')

  return {
    isLogin: computed(() => !!token.value),
    token: computed(() => token.value),
  }
}
