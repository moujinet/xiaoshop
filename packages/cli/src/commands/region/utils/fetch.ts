import { ofetch } from 'ofetch'
import { minify } from 'html-minifier'

import { Console } from '@/utils/console'

import { useCache } from './cache'

export async function fetchHtml(page: string): Promise<string> {
  const host = 'https://www.stats.gov.cn'
  const url = `/sj/tjbz/tjyqhdmhcxhfdm/2023/${page}.html`

  const response = await ofetch(url, {
    baseURL: host,
    retry: 3,
    retryDelay: 1000,
    timeout: 10000,
  }).catch((e) => {
    if (
      e.statusCode === 404
      && !page.endsWith('01')
      && !page.endsWith('1331')
      && !page.endsWith('350527')
    ) {
      // 全部市辖区、河北雄安新区、福建泉州金门，则跳过异常
      Console.error(e)
    }
    else if (
      e.statusCode !== 404
      && !e.message.includes('This operation was aborted')
    ) {
      Console.error(e)
    }
  })

  if (!response)
    return ''

  return minify(response, {
    collapseWhitespace: true,
    quoteCharacter: '\'',
  })
}

export async function fetchFromCache(page: string): Promise<string> {
  const {
    read,
    write,
  } = useCache('html')

  const cache = read(page)

  if (cache === '') {
    const html = await fetchHtml(page)
    return write(page, html)
  }

  return cache
}
