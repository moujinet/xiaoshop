import VueHook from 'alova/vue'
import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'

/**
 * 本地资源请求实例
 */
export const localResource = createAlova({
  id: 'local',
  timeout: 2000,
  statesHook: VueHook,
  requestAdapter: adapterFetch(),
  responded: res => res.json(),
  cacheFor: {
    GET: {
      mode: 'restore',
      expire: 60 * 1000,
    },
  },
})
