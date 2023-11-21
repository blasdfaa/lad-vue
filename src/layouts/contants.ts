import type { MenuOption } from 'naive-ui';
import { RenderUtils } from '~/lib/utils/render';
import { HomeOutline } from '@vicons/ionicons5';

export const menuOptions: MenuOption[] = [
  {
    label: RenderUtils.renderMenuLink('Home', { name: 'home' }),
    key: 'home',
    icon: RenderUtils.renderIcon(HomeOutline),
  },
  {
    label: RenderUtils.renderMenuLink('About', { name: 'about' }),
    key: 'about',
    icon: RenderUtils.renderIcon(HomeOutline),
  },
];
