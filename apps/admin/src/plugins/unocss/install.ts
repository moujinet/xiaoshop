import { addCustomTab } from '@vue/devtools-api'

import 'uno.css'
import '@unocss/reset/tailwind.css'

export default definePlugin(() => {
  addCustomTab({
    name: 'unocss',
    title: 'UnoCSS',
    icon: 'https://unocss.dev/favicon.svg',
    view: {
      type: 'iframe',
      src: 'http://localhost:3000/__unocss',
    },
    category: 'modules',
  })
})
