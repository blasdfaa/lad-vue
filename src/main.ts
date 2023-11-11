import { createApp } from 'vue';

import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from './stores';
import { setupVuetify } from './plugins/vuetify';

const app = createApp(App);

setupStore(app);
setupRouter(app);
setupVuetify(app);

app.mount('#app');
