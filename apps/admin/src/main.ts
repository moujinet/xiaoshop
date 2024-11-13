import App from '~/app.vue'

import 'uno.css'
import '@arco-design/web-vue/es/message/style/index.less'
import '@arco-design/web-vue/es/notification/style/index.less'

import '~/styles/global.less'

createAdminClient(
  App,
  async () => {},
)
