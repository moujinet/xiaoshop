import type { ILocation } from '@xiaoshop/shared/types'

import { existsSync, readFileSync, writeFileSync } from 'node:fs'

import { resolvePath } from './path'

export function useCache<
  T extends 'html' | 'json',
  R = T extends 'html' ? string : ILocation[],
>(type: T) {
  const read = (page: string): R => {
    const file = resolvePath(page, type, `.${type}`)

    if (!existsSync(file))
      return '' as R

    const cache = readFileSync(file, 'utf-8') || ''

    if (type === 'html')
      return cache as R

    return JSON.parse(cache) as R
  }

  const write = (page: string, data: R): R => {
    const file = resolvePath(page, type, `.${type}`)

    if (
      type === 'html'
      && data instanceof String
      && !data.includes('Please enable JavaScript and refresh the page.')
    ) {
      writeFileSync(file, data as string, 'utf-8')
    }
    else {
      writeFileSync(
        file,
        (data as ILocation[]).length > 0 ? JSON.stringify(data) : '[]',
        'utf-8',
      )
    }

    return data as R
  }

  return {
    read,
    write,
  }
}
