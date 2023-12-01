import { VueQueryPlugin } from '@tanstack/vue-query';
import type { App } from 'vue';

export function setupVueQuery(app: App) {
  app.use(VueQueryPlugin);
}
