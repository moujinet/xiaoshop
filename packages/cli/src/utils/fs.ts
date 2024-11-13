import { join } from 'node:path'
import { readFileSync } from 'node:fs'

export function readFile(file: string, root: string | false = '') {
  const path = root !== false
    ? join(root || process.cwd(), file)
    : file

  return readFileSync(path, 'utf-8')
}

export function readAnyFileOf(files: string[], root: string | false = '') {
  let error: string | undefined

  for (let id = 0; id < files.length; id++) {
    const file = files[id]

    try {
      return readFile(file, root)
    }
    catch (e) {
      if (!error && typeof e?.code === 'string') {
        if (['EACCES', 'EPERM'].includes(e.code))
          error = e.path.replace(process.cwd(), '.')
      }

      if (id === files.length - 1 === false)
        continue

      if (error)
        return `ERROR: Read File ${error} failed.`
      else
        return undefined
    }
  }
}
