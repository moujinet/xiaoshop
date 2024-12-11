import type { ILocation } from '@xiaoshop/shared/types'

export interface IFetchResult {
  provinces: ILocation[]
  cities: ILocation[]
  areas: ILocation[]
  streets: ILocation[]
}
