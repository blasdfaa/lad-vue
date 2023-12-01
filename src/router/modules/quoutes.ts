import type { RouteRecordRaw } from 'vue-router';
import { RouteNamesEnum } from '~/enums/routeNamesEnum';

export const routes: RouteRecordRaw[] = [
  {
    name: RouteNamesEnum.QUOTES,
    path: '/quotes',
    component: () => import('~/views/quotes/QuotesListView.vue'),
    meta: { title: 'Quoutes', breadcrumb: () => [{ label: 'Quoutes' }] },
  },
  {
    name: RouteNamesEnum.QUOTES_DETAILS,
    path: '/quotes/:id?',
    component: () => import('~/views/quotes/QuoteDetailsView.vue'),
    meta: {
      breadcrumb: ({ params }) => [{ label: 'Quoutes', to: '/quotes' }, { label: params.id as string }],
    },
  },
];

export default routes;
