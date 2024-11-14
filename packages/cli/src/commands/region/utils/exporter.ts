import type { IFetchResult } from './types'
import type { ILocationNested } from '@xiaoshop/shared'

import { join } from 'node:path'
import { cloneDeep } from 'es-toolkit/object'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'

export class Exporter {
  constructor(
    readonly result: IFetchResult,
    readonly outputDir: string,
  ) {}

  getProvinces(): ILocationNested[] {
    return cloneDeep(this.result.provinces) as ILocationNested[]
  }

  getCities(): ILocationNested[] {
    const provinces = this.getProvinces()

    return provinces.map((province) => {
      return {
        ...province,
        children: this.result.cities.filter(
          c => c.code.startsWith(province.code),
        ) as ILocationNested[],
      }
    })
  }

  getAreas(): ILocationNested[] {
    const provinces = this.getCities()

    return provinces.map((province) => {
      return {
        ...province,
        children: province.children.map(
          (city) => {
            return {
              ...city,
              children: this.result.areas.filter(
                a => a.code.startsWith(city.code),
              ) as ILocationNested[],
            }
          },
        ),
      }
    })
  }

  getStreets(): ILocationNested[] {
    const provinces = this.getAreas()

    return provinces.map((province) => {
      return {
        ...province,
        children: province.children.map(
          (city) => {
            return {
              ...city,
              children: city.children.map(
                (area) => {
                  return {
                    ...area,
                    children: this.result.streets.filter(
                      s => s.code.startsWith(area.code),
                    ) as ILocationNested[],
                  }
                },
              ),
            }
          },
        ),
      }
    })
  }

  toJson(name: string, data: ILocationNested[]) {
    if (!existsSync(this.outputDir))
      mkdirSync(this.outputDir, { recursive: true })

    const filePath = join(this.outputDir, name)

    writeFileSync(filePath, JSON.stringify(data), 'utf-8')

    return filePath
  }
}
