import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';
import type { App } from 'vue';

const DEFAULT_STALE_TIME = 1000 * 20; // 20sec

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: { queries: { staleTime: DEFAULT_STALE_TIME } },
  },
};

export function setupVueQuery(app: App) {
  app.use(VueQueryPlugin, vueQueryPluginOptions);
}
