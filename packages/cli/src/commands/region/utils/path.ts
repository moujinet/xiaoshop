import { existsSync, mkdirSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'

import { loadConfig } from '@/config'

export function resolvePath(name: string, prefix?: string, suffix?: string) {
  const { region } = loadConfig()

  const baseDir = dirname(name)
  const fileName = basename(name)
  const path = join(region.cacheDir, prefix || '', baseDir)

  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true })
  }

  return join(path, fileName + (suffix || ''))
}
