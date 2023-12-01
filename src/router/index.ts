import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { loadLayoutMiddleware } from './middleware/loadLayout'
import type { ModuleType } from './types'
import { RouteNamesEnum } from '~/enums/routeNamesEnum'

// Все "модули" роутера импортируются автоматически
const modules = import.meta.glob<ModuleType>('./modules/**/*.ts', { eager: true })

const routeModuleList: RouteRecordRaw[] = Object.keys(modules).reduce<RouteRecordRaw[]>((list, key) => {
  const mod = modules[key].default ?? {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  return [...list, ...modList]
}, [])

const indexRoute: RouteRecordRaw = {
  path: '/',
  redirect: RouteNamesEnum.QUOTES,
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: [indexRoute, ...routeModuleList],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {
  router.beforeEach(loadLayoutMiddleware)

  app.use(router)
}

export default router
