import type { IFetchResult } from './utils/types'
import type { ILocationNested } from '@xiaoshop/shared'

import { format } from 'node:util'
import * as Prompt from '@clack/prompts'
import { setTimeout } from 'node:timers/promises'

import { Console } from '@/utils/console'
import { AbstractAction } from '@/common/action'
import { ConfigPath, loadConfig } from '@/config'

import { useCache } from './utils/cache'
import { useLocker } from './utils/locker'
import { Exporter } from './utils/exporter'
import { fetchFromCache } from './utils/fetch'
import { isVillageCity, parseHtml } from './utils/parse'

const REG_PROVINCE = /<td><a href='(.*?).html'>(.*?)<br><\/a><\/td>/g
const REG_CITY = /<tr class='.*?'><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/g
const REG_VILLAGE = /<tr class='.*?'><td>(.*?)<\/td><td>.*?<\/td><td>(.*?)<\/td><\/tr>/g

export class ChinaAction extends AbstractAction {
  private result: IFetchResult

  constructor() {
    super()

    this.result = {
      provinces: [],
      cities: [],
      areas: [],
      streets: [],
    }
  }

  async run() {
    Console.title('Update China Mainland Region Dictionary')

    const lastUpdate = useLocker().read()

    if (lastUpdate.updated !== '') {
      Console.note(
        format('Update %d Regions at %s', lastUpdate.total, lastUpdate.updated),
        'Update History ',
      )

      const update = await Prompt.confirm({
        message: 'Update Again?',
      })

      if (Prompt.isCancel(update)) {
        Console.cancel('Canceled')
        process.exit(0)
      }

      if (update === true)
        await this.fetch()
    }

    if (await this.totalResult() === 0)
      await this.fetchFromCache()

    await this.export()
  }

  async fetch() {
    await this.fetchProvinces()
    await this.fetchCities()
    await this.fetchAreas()
    await this.fetchStreets()

    useLocker()
      .write({
        updated: new Date().toLocaleString(),
        total: await this.totalResult(),
      })
  }

  async export() {
    const toJson = await Prompt.confirm({
      message: 'Export to Json?',
    })

    if (Prompt.isCancel(toJson)) {
      Console.cancel('Canceled')
      process.exit(0)
    }

    if (toJson === true) {
      const config = loadConfig()

      const exporter = new Exporter(
        this.result,
        config.region.outputDir,
      )

      // 省级
      await this.exportJson('provinces.json', exporter, () => exporter.getProvinces())

      // 市级
      await this.exportJson('cities.json', exporter, () => exporter.getCities())

      // 区级
      await this.exportJson('areas.json', exporter, () => exporter.getAreas())

      // 街道级
      await this.exportJson('streets.json', exporter, () => exporter.getStreets())
    }
  }

  async exportJson(name: string, exporter: Exporter, loadData: () => ILocationNested[]) {
    Console.step.start('Export %s', name)

    const filePath = exporter.toJson(
      name,
      loadData(),
    )

    Console.step.success(
      'Export %s to %s',
      name,
      filePath.replace(ConfigPath.paths.PROJECT_ROOT, '.'),
    )
  }

  async fetchProvinces() {
    Console.step.start('Fetching Provinces')

    const html = await fetchFromCache('index')

    this.result.provinces = parseHtml(html, REG_PROVINCE, 2)

    useCache('json').write('provinces', this.result.provinces)

    Console.step.success('Provinces %s', this.result.provinces.length)
  }

  async fetchCities() {
    Console.step.start('Fetching Cities')

    for (let i = 0; i < this.result.provinces.length; i++) {
      const province = this.result.provinces[i]

      await setTimeout(50 * Math.random())

      Console.step.message('%s (%s/%s)', province.name, i + 1, this.result.provinces.length)

      const html = await fetchFromCache(province.code)
      const cities = parseHtml(html, REG_CITY, 4)

      this.result.cities.push(...cities)
    }

    useCache('json').write('cities', this.result.cities)

    Console.step.success('Cities %s', this.result.cities.length)
  }

  async fetchAreas() {
    Console.step.start('Fetching Areas')

    for (let i = 0; i < this.result.cities.length; i++) {
      const city = this.result.cities[i]

      Console.step.message('%s (%s/%s)', city.name, i + 1, this.result.cities.length)

      const html = await fetchFromCache(
        isVillageCity(city.code)
          ? `${city.code.substring(0, 2)}/${city.code}`
          : `${city.code.substring(0, 2)}/${city.code.substring(0, 6)}`,
      )
      const areas = parseHtml(
        html,
        REG_CITY,
        isVillageCity(city.code) ? 9 : 6,
      )

      this.result.areas.push(...areas)
    }

    useCache('json').write('areas', this.result.areas)

    Console.step.success('Areas %s', this.result.areas.length)
  }

  async fetchStreets() {
    Console.step.start('Fetching Streets')

    for (let i = 0; i < this.result.areas.length; i++) {
      const area = this.result.areas[i]

      Console.step.message('%s (%s/%s)', area.name, i + 1, this.result.areas.length)

      const html = await fetchFromCache(
        `${area.code.substring(0, 2)}/${area.code.substring(2, 4)}/${area.code}`,
      )
      const streets = parseHtml(
        html,
        isVillageCity(area.code) ? REG_VILLAGE : REG_CITY,
        isVillageCity(area.code) ? 12 : 9,
      )

      this.result.streets.push(...streets)
    }

    useCache('json').write('streets', this.result.streets)

    Console.step.success('Streets %s', this.result.streets.length)
  }

  async fetchFromCache() {
    const cache = useCache('json')

    this.result.provinces = cache.read('provinces')
    this.result.cities = cache.read('cities')
    this.result.areas = cache.read('areas')
    this.result.streets = cache.read('streets')
  }

  async totalResult() {
    return Object.keys(this.result).reduce(
      (total, key) => {
        return total + this.result[key as keyof IFetchResult].length
      },
      0,
    )
  }
}
