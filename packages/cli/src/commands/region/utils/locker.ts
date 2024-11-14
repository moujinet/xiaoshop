import { existsSync, readFileSync, writeFileSync } from 'node:fs'

import { resolvePath } from './path'

interface ILockFile {
  updated: string
  total: number
}

export function useLocker() {
  const lockFile = resolvePath('.lock')

  const write = (locker: ILockFile) => {
    writeFileSync(
      lockFile,
      JSON.stringify(locker),
      'utf-8',
    )
  }

  const read = () => {
    if (!existsSync(lockFile)) {
      const update: ILockFile = { updated: '', total: 0 }

      write(update)

      return update
    }

    return JSON.parse(
      readFileSync(lockFile, 'utf-8'),
    ) as ILockFile
  }

  return {
    read,
    write,
  }
}
