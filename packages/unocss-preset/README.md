# @xiaoshop/unocss-preset

## 使用

```ts
// uno.config.ts
import { presetArco } from '@xiaoshop/unocss-preset'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetArco(),
    // ...custom presets
  ],
})
```
