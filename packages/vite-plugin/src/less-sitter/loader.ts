import type { ILessVariables } from './types'
import { parseLessVariables } from './parser'
import { readFileContent } from './utils'

export function loadLessVariables(path: string): ILessVariables | undefined {
  const content = readFileContent(path)

  if (content)
    return parseLessVariables(content)
}
