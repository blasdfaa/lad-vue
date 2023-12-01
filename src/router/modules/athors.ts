import type { RouteRecordRaw } from 'vue-router';
import { RouteNamesEnum } from '~/enums/routeNamesEnum';

export const routes: RouteRecordRaw[] = [
  {
    name: RouteNamesEnum.AUTHORS,
    path: '/authors',
    component: () => import('~/views/AuthorsView.vue'),
    meta: { title: 'Authors' },
  },
];

export default routes;
