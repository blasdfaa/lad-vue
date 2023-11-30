import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';
import { loadLayoutMiddleware } from './middleware/loadLayout';
import { AppLayoutsEnum } from '~/enums/appLayoutsEnum';
import { RouteNamesEnum } from '~/enums/routeNamesEnum';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: [
    {
      path: '/',
      name: RouteNamesEnum.HOME,
      component: () => import('~/views/HomeView.vue'),
      meta: { title: 'Home', layout: AppLayoutsEnum.DEFAULT },
    },
    {
      path: '/about',
      name: RouteNamesEnum.ABOUT,
      component: () => import('~/views/AboutView.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/sign-in',
      name: RouteNamesEnum.SIGN_IN,
      component: () => import('~/views/SignInView.vue'),
      meta: { layout: AppLayoutsEnum.AUTH },
    },
  ],
});

export function setupRouter(app: App) {
  router.beforeEach(loadLayoutMiddleware);

  app.use(router);
}

export default router;
