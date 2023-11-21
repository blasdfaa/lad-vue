import { createApp } from 'vue';

import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from './stores';

const app = createApp(App);

setupStore(app);
setupRouter(app);

app.mount('#app');
