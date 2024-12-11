import { createApp } from 'vue'

import 'uno.css'
import App from './app.vue'
import UiKit from '@xiaoshop/uikit'

const app = createApp(App)
app.use(UiKit, { prefix: 'Ui' })
app.mount('#app')
