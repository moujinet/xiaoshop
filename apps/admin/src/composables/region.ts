import type { ILocationNested, ILocationPath } from '@xiaoshop/shared'

import { cloneDeep } from 'es-toolkit/compat'

export type ILocationCode = ILocationNested['code']

export type IUseRegionDataKey = 'provinces' | 'cities' | 'areas' | 'streets'

interface IUseRegionDataReturns {
  /**
   * 加载地区数据
   *
   * @param key IUseRegionDataKey
   * @param banded 屏蔽地区 CODE
   * @returns 地区嵌套列表
   */
  loadRegion: (key: IUseRegionDataKey, banded?: ILocationCode[]) => Promise<ILocationNested[]>
  /**
   * 查找地区路径
   *
   * @param regions 地区嵌套列表
   * @param codes 地区 CODE
   * @returns 地区路径
   */
  findRegionPath: (regions: ILocationNested[], codes: ILocationCode | ILocationCode[]) => ILocationPath
  /**
   * 字符串化地区数据
   *
   * @param path 地区路径
   * @param sep 分隔符
   */
  stringify: (path: ILocationPath, sep?: string) => string
}

export function useRegionData(): IUseRegionDataReturns {
  /**
   * 分割地区编码
   */
  const splitCode = (code: ILocationCode): ILocationCode[] => {
    if (code.includes(','))
      return code.split(',')

    const codes: ILocationCode[] = []

    // 省级
    if (code.length > 0)
      codes.push(code.substring(0, 2))

    // 地级
    if (code.length > 0)
      codes.push(code.substring(0, 4))

    // 县级
    if (code.length > 0) {
      // 广东省中山市(4420), 广东省东莞市(4419), 海南省儋州市(4604)
      codes.push(code.substring(
        0,
        (code.startsWith('4420') || code.startsWith('4419') || code.startsWith('4604'))
          ? 9
          : 6,
      ))
    }

    // 乡级
    if (code.length > 0)
      codes.push(code)

    return codes
  }

  /**
   * 过滤屏蔽地区
   */
  const withoutBanded = (
    data: ILocationNested[],
    banded?: ILocationCode[],
  ): ILocationNested[] => {
    return banded && banded.length
      ? data.filter(item => !banded.includes(item.code))
      : data
  }

  /**
   * 扁平化屏蔽地区 CODE
   */
  const flatten = (banded: ILocationCode[]) => {
    const flatten: ILocationCode[] = []

    if (banded && banded.length) {
      banded.forEach((code) => {
        const codes = splitCode(code)

        if (codes.length > 1)
          codes.shift()

        flatten.push(...codes)
      })
    }

    return flatten
  }

  /**
   * 加载地区数据
   */
  async function loadRegion(
    key: IUseRegionDataKey,
    banded?: ILocationCode[],
  ): Promise<ILocationNested[]> {
    const data = await localResource.Get<ILocationNested[]>(`/assets/json/${key}.json`)

    if (!banded)
      return data

    const flattenBanded = flatten(banded)

    if (key === 'provinces')
      return withoutBanded(data, flattenBanded)

    if (key === 'cities') {
      return withoutBanded(data, flattenBanded)
        .map((province) => {
          province.children = withoutBanded(
            province.children,
            flattenBanded,
          )
            .filter(city => city.code.startsWith(province.code))

          return province
        })
    }

    return withoutBanded(data, flattenBanded)
      .map((province) => {
        province.children = withoutBanded(
          province.children,
          flattenBanded,
        )
          .filter(city => city.code.startsWith(province.code))
          .map((city) => {
            city.children = withoutBanded(
              city.children,
              flattenBanded,
            )
              .filter(area => area.code.startsWith(city.code))

            return city
          })

        return province
      })
  }

  /**
   * 查找地区路径
   */
  function findRegionPath(
    regions: ILocationNested[],
    codes: ILocationCode | ILocationCode[],
  ): ILocationPath {
    const path: ILocationPath = []

    codes = Array.isArray(codes) ? cloneDeep(codes) : splitCode(codes)

    if (codes.length > 0) {
      const code = codes.shift()

      regions.forEach((region) => {
        if (region.code === code) {
          path.push({
            code,
            name: region.name,
          })

          if (
            codes.length > 0
            && region.children
            && region.children.length > 0
          ) {
            path.push(...findRegionPath(region.children, codes))
          }
        }
      })
    }

    return path
  }

  /**
   * 字符串化地区数据
   */
  function stringify(path: ILocationPath, sep: string = ''): string {
    return path.map(item => item.name).join(sep)
  }

  return {
    loadRegion,
    findRegionPath,
    stringify,
  }
}
