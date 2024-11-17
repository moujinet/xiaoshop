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

  return {
    /**
     * 显示信息消息
     *
     * @param message string
     * @param args Record<string, string>
     */
    info: (message: string, args: Record<string, string> = {}) => {
      ArcoMessage.info({ id, content: replaceVariables(message, args), duration, closable, showIcon, resetOnHover: true, onClose })
    },

    /**
     * 显示成功消息
     *
     * @param message string
     * @param args Record<string, string>
     */
    success: (message: string, args: Record<string, string> = {}) => {
      ArcoMessage.success({ id, content: replaceVariables(message, args), duration, closable, showIcon, resetOnHover: true, onClose })
    },

    /**
     * 显示错误消息
     *
     * @param message string
     * @param args Record<string, string>
     */
    error: (message: string, args: Record<string, string> = {}) => {
      ArcoMessage.error({ id, content: replaceVariables(message, args), duration, closable, showIcon, resetOnHover: true, onClose })
    },

    /**
     * 显示加载中
     *
     * @param content string
     */
    loading: (content: string = '加载中...') => {
      ArcoMessage.loading({ id, content, duration, closable: false, showIcon, onClose })
    },
  }
}
