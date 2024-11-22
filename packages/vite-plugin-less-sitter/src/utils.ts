/* eslint-disable unused-imports/no-unused-vars */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export function readFileContent(path: string): false | string {
  try {
    const resolvedPath = resolve(path)
    return readFileSync(resolvedPath, 'utf-8').toString()
  }
  catch (e) {
    return false
  }
}
