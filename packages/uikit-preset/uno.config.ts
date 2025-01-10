import { defineConfig, presetUno } from 'unocss'
import { presetUiKit } from './src'

export default defineConfig({
  presets: [
    presetUno(),
    presetUiKit(),
  ],
})
