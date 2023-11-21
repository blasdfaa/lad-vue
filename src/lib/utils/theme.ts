import router from '~/router';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export class ThemeUtils {
  private static THEME_KEY = 'theme';

  static getTheme() {
    return new URL(location.href).searchParams.get('theme') as Theme;
  }

  static setTheme(theme: string) {
    router.push({ path: location.pathname, query: { theme } });
  }

  static clearTheme() {
    router.push({ query: { theme: undefined } });
  }

  /**
   * @description Прочитать тему из «localStorage», если тема не установлена, венрнуть тему по умолчанию в соответствии с настройками системной темы.
   */
  static getDefaultTheme(): Theme {
    if (
      this.getTheme() === Theme.DARK ||
      (!this.getTheme() && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return Theme.DARK;
    }
    return Theme.LIGHT;
  }

  /**
   * 切换主题
   * @description
   * - 切换主题模式时，会自动添加或移除 document 上 `dark` 类名
   * - 将主题模式存储到 `localStorage` 中，以便下次打开页面时读取
   * @param theme  - 主题
   * @example
   * ```ts
   * ThemeUtils.changeTheme(Theme.DARK)
   * ThemeUtils.changeTheme(Theme.LIGHT)
   * ```
   */
  static changeTheme(theme: Theme) {
    if (theme === Theme.DARK || theme === Theme.LIGHT) {
      document.documentElement.setAttribute('data-theme', theme);
      ThemeUtils.setTheme(theme);
    }
  }
}
