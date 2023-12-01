import { NIcon } from 'naive-ui'
import { h } from 'vue'
import { RouterLink, type RouterLinkProps } from 'vue-router'

export class RenderUtils {
  static DEFAULT_ICON_SIZE = 16

  /**
   * @param icon - компонент иконки
   * @param [size] - размер иконки.
   */
  static renderIcon(icon: any, size: number = this.DEFAULT_ICON_SIZE, options?: any) {
    return () => h(NIcon, { size, ...options }, { default: () => h(icon) })
  }

  /**
   * @param label
   * @param to
   */
  static renderMenuLink(label: string, to: RouterLinkProps['to']) {
    return () => h(RouterLink, { to }, { default: () => label })
  }
}
