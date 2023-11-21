import type { RouteLocationNormalized } from 'vue-router';
import { AppLayoutsEnum } from '~/enums/appLayoutsEnum';

const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'AppLayoutDefault.vue',
  auth: 'AppLayoutAuth.vue',
};

export async function loadLayoutMiddleware(route: RouteLocationNormalized): Promise<void> {
  const { layout } = route.meta;
  const normalizedLayoutName = layout || AppLayoutsEnum.DEFAULT;
  const fileName = AppLayoutToFileMap[normalizedLayoutName];
  const fileNameWithoutExtension = fileName.split('.vue')[0];

  const component = await import(`../../layouts/${fileNameWithoutExtension}.vue`);
  route.meta.layoutComponent = component.default;
}
