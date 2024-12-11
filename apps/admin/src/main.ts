import App from '~/app.vue'
import { createHead } from '@unhead/vue'
import { createRouter, createWebHistory } from 'vue-router'

import 'uno.css'

const app = createApp(App)
const head = createHead()
const store = createPinia()

app.use(head)
app.use(store)

const router = createRouter({
  routes: [],
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }),
})

createContext(app, store, router).then(
  async () => {
    await router.isReady()
    app.mount('#app')
  },
)
