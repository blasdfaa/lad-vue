import type { MenuOption } from 'naive-ui';
import { RenderUtils } from '~/lib/utils/render';
import { HomeOutline } from '@vicons/ionicons5';
import { RouteNamesEnum } from '~/enums/routeNamesEnum';

export const menuOptions: MenuOption[] = [
  {
    label: RenderUtils.renderMenuLink('Home', { name: RouteNamesEnum.HOME }),
    key: 'home',
    icon: RenderUtils.renderIcon(HomeOutline),
  },
  {
    label: RenderUtils.renderMenuLink('About', { name: RouteNamesEnum.ABOUT }),
    key: 'about',
    icon: RenderUtils.renderIcon(HomeOutline),
  },
];
