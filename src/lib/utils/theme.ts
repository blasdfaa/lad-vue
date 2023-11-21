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

  static getDefaultTheme(): Theme {
    if (
      this.getTheme() === Theme.DARK ||
      (!this.getTheme() && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return Theme.DARK;
    }
    return Theme.LIGHT;
  }

  static changeTheme(theme: Theme) {
    if (theme === Theme.DARK || theme === Theme.LIGHT) {
      ThemeUtils.setTheme(theme);
    }
  }
}
