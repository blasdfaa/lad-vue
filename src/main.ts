import { createApp } from 'vue'

import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './stores'
import { setupVueQuery } from './plugins/vueQuery'

const app = createApp(App)

setupStore(app)
setupRouter(app)
setupVueQuery(app)

app.mount('#app')
