import { ConfigLoader } from './loader'

export function loadConfig() {
  return new ConfigLoader().load()
}

export * from './path'
