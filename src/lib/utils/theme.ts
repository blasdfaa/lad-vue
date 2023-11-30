import { createStorage, type StorageValue } from 'unstorage';
import localStorageDriver from 'unstorage/drivers/localstorage';

const storage = createStorage({
  driver: localStorageDriver({}),
});

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export class ThemeUtils {
  private static THEME_KEY = 'theme';

  static async getTheme(): Promise<StorageValue> {
    return storage.getItem<Theme>(this.THEME_KEY);
  }

  static async setTheme(theme: Theme) {
    await storage.setItem<Theme>(this.THEME_KEY, theme);
  }

  static async clearTheme() {
    await storage.removeItem(this.THEME_KEY);
  }

  static async getDefaultTheme(): Promise<Theme> {
    if (
      (await this.getTheme()) === Theme.DARK ||
      (!this.getTheme() && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return Theme.DARK;
    }
    return Theme.LIGHT;
  }

  static async changeTheme(theme: Theme) {
    if (theme === Theme.DARK || theme === Theme.LIGHT) {
      await this.setTheme(theme);
    }
  }
}
