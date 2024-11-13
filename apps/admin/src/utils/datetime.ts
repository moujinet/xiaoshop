import {
  formatTimeAgo,
  type UseTimeAgoMessages,
  type UseTimeAgoUnit,
} from '@vueuse/core'

type UseTimeAgoUnitNames = '秒' | '分' | '时' | '天' | '周' | '月' | '年'

const UNITS: UseTimeAgoUnit<UseTimeAgoUnitNames>[] = [
  { max: 60000, value: 1000, name: '秒' },
  { max: 2760000, value: 60000, name: '分' },
  { max: 72000000, value: 3600000, name: '时' },
  { max: 518400000, value: 86400000, name: '天' },
  { max: 2419200000, value: 604800000, name: '周' },
  { max: 28512000000, value: 2592000000, name: '月' },
  { max: Number.POSITIVE_INFINITY, value: 31536000000, name: '年' },
]

const MESSAGES: UseTimeAgoMessages<UseTimeAgoUnitNames> = {
  justNow: '刚刚',
  past: n => n.match(/\d/) ? `${n}之前` : n,
  future: n => n.match(/\d/) ? `于 ${n}` : n,
  月: (n, past) => n === 1
    ? past
      ? '上个月'
      : '下个月'
    : `${n} 个月前`,
  年: (n, past) => n === 1
    ? past
      ? '去年'
      : '明年'
    : `${n} year${n > 1 ? 's' : ''}`,
  天: (n, past) => n === 1
    ? past
      ? '昨天'
      : '明天'
    : `${n} 天`,
  周: (n, past) => n === 1
    ? past
      ? '上周'
      : '下周'
    : `${n} 周`,
  时: n => `${n} 小时`,
  分: n => `${n} 分钟`,
  秒: n => `${n} 秒`,
  invalid: '',
}

export function timeAgo(time: MaybeRefOrGetter<Date | number | string>) {
  return formatTimeAgo<UseTimeAgoUnitNames>(new Date(toValue(time)), {
    max: '周',
    messages: MESSAGES,
    units: UNITS,
  })
}
