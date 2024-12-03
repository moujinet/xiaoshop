import {
  DEFAULT_MESSAGE_DURATION,
  DEFAULT_MESSAGE_ID,
} from '~/constants/defaults'

export interface IUseMessageOptions {
  id?: string
  duration?: number
  showIcon?: boolean
  closable?: boolean
  onClose?: () => void
}

export function useMessage(options?: IUseMessageOptions) {
  const {
    id = DEFAULT_MESSAGE_ID,
    duration = DEFAULT_MESSAGE_DURATION,
    showIcon = true,
    closable = true,
    onClose,
  } = options || {}

  const config = {
    id,
    duration,
    showIcon,
    closable,
    onClose,
    resetOnHover: true,
  }

  return {
    /**
     * 显示信息消息
     *
     * @param message string
     * @param args Record<string, string>
     */
    info: (message: string, args: Record<string, string> = {}) => {
      ArcoMessage.info({ ...config, content: replaceVariables(message, args) })
    },

    /**
     * 显示成功消息
     *
     * @param message string
     * @param args Record<string, string>
     */
    success: (message: string, args: Record<string, string> = {}) => {
      ArcoMessage.success({ ...config, content: replaceVariables(message, args) })
    },

    /**
     * 显示错误消息
     *
     * @param message string
     * @param args Record<string, string>
     */
    error: (message: string, args: Record<string, string> = {}) => {
      ArcoMessage.error({ ...config, content: replaceVariables(message, args) })
    },

    /**
     * 显示加载中
     *
     * @param content string
     */
    loading: (content: string = '加载中...') => {
      ArcoMessage.loading({ ...config, content })
    },
  }
}
