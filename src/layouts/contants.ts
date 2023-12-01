import type { MenuOption } from 'naive-ui'
import { BookOutline, PricetagOutline } from '@vicons/ionicons5'
import { RenderUtils } from '~/lib/utils/render'
import { RouteNamesEnum } from '~/enums/routeNamesEnum'

export const menuOptions: MenuOption[] = [
  {
    label: RenderUtils.renderMenuLink('Quotes', { name: RouteNamesEnum.QUOTES }),
    key: 'quotes',
    icon: RenderUtils.renderIcon(BookOutline),
  },
  {
    label: RenderUtils.renderMenuLink('Tags', { name: RouteNamesEnum.TAGS }),
    key: 'tags',
    icon: RenderUtils.renderIcon(PricetagOutline),
  },
]
