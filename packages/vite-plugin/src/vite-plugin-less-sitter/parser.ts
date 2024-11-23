import type { Variables } from './types'

export function parseLessVariables(content: string): Variables {
  const variables: Variables = {}

  content
    .split('\n')
    .map(item => item.trim())
    .filter(Boolean)
    .forEach((item) => {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      const regex = /^@([\w-]+):\s*([^;]+);$/

      const match = regex.exec(item)

      if (match !== null) {
        variables[match[1].trim()] = match[2].trim()
      }
    })

  return variables
}
