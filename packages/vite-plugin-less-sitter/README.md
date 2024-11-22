# @xiaoshop/vite-plugin-less-sitter

将 less 文件中的变量 `@Variables` 写入 `vite.config.ts` 的 `css.preprocessorOptions.less.modifyVars` 中。

## 使用

```ts
import type { UserConfig } from 'vite'

import ViteLessSitter from '@xiaoshop/vite-plugin-less-sitter'

export default (): UserConfig => {
  plugins: [
    ViteLessSitter({
      imports: [
        'src/styles/variables.less'
      ]
    })
  ]
}
```
