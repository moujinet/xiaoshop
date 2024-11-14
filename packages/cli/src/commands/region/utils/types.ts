import type { ILocation } from '@xiaoshop/shared'

export interface IFetchResult {
  provinces: ILocation[]
  cities: ILocation[]
  areas: ILocation[]
  streets: ILocation[]
}
