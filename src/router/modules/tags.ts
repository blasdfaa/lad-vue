import type { RouteRecordRaw } from 'vue-router'
import { RouteNamesEnum } from '~/enums/routeNamesEnum'

export const routes: RouteRecordRaw[] = [
  {
    name: RouteNamesEnum.TAGS,
    path: '/tags',
    component: () => import('~/views/Tags.vue'),
    meta: { title: 'Tags' },
  },
]

export default routes
