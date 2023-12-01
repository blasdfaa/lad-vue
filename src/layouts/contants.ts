import type { MenuOption } from 'naive-ui';
import { RenderUtils } from '~/lib/utils/render';
import { BookOutline, PencilOutline, PricetagOutline } from '@vicons/ionicons5';
import { RouteNamesEnum } from '~/enums/routeNamesEnum';

export const menuOptions: MenuOption[] = [
  {
    label: RenderUtils.renderMenuLink('Quotes', { name: RouteNamesEnum.QUOTES }),
    key: 'quotes',
    icon: RenderUtils.renderIcon(BookOutline),
  },
  {
    label: RenderUtils.renderMenuLink('Authors', { name: RouteNamesEnum.AUTHORS }),
    key: 'authors',
    icon: RenderUtils.renderIcon(PencilOutline),
  },
  {
    label: RenderUtils.renderMenuLink('Tags', { name: RouteNamesEnum.TAGS }),
    key: 'tags',
    icon: RenderUtils.renderIcon(PricetagOutline),
  },
];
