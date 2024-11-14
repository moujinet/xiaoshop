import type { ILocation } from '@xiaoshop/shared'

// eslint-disable-next-line regexp/no-super-linear-backtracking
const REG_LINK = /<a.*?>(.*?)<\/a>/g

export function parseHtml(html: string, regexp: RegExp, len: number): ILocation[] {
  const data: ILocation[] = []

  let current: string[] | null = []

  while (current !== null) {
    current = regexp.exec(html)

    if (current !== null) {
      data.push({
        code: current[1].replace(REG_LINK, '$1').trim().substring(0, len),
        name: current[2].replace(REG_LINK, '$1').trim(),
      })
    }
  }

  return data
}

/**
 * 判断是否是县级市
 *
 * - 广东省中山市 (4420)
 * - 广东省东莞市 (4419)
 * - 海南省儋州市 (4604)
 */
export function isVillageCity(code: string) {
  return code.startsWith('4420')
    || code.startsWith('4419')
    || code.startsWith('4604')
}
