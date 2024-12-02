import type { ILessVariables } from './types'

export function parseLessVariables(content: string): ILessVariables {
  const variables: ILessVariables = {}

  content
    .split('\n')
    .map(item => item.trim())
    .filter(Boolean)
    .forEach((item) => {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      const regex = /^@([\w-]+):\s*([^;]+);$/
      const match = regex.exec(item)

      const skips = ['import']

      if (match !== null && !skips.includes(match[1].trim())) {
        variables[match[1].trim()] = match[2].trim()
      }
    })

  return variables
}
