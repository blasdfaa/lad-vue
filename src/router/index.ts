import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';
import { loadLayoutMiddleware } from './middleware/loadLayout';
import { AppLayoutsEnum } from '~/enums/appLayoutsEnum';
import { persistThemeParamsMiddleware } from './middleware/persistThemeParams';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        layout: AppLayoutsEnum.DEFAULT,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export function setupRouter(app: App) {
  router.beforeEach(loadLayoutMiddleware);
  router.beforeEach(persistThemeParamsMiddleware);

  app.use(router);
}

export default router;
