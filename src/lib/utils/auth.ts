import { createStorage, type StorageValue } from 'unstorage';
import localStorageDriver from 'unstorage/drivers/localstorage';

const storage = createStorage({
  driver: localStorageDriver({ base: 'auth:' }),
});

/**
 * @summary Используется для обработки токенов авторизации.
 */
export class AuthUtils {
  private static TOKEN_KEY = 'token';

  static async getToken(): Promise<StorageValue> {
    return storage.getItem(this.TOKEN_KEY);
  }

  /**
   * Получить `Authorization` хедер
   * @description Возвращает токен в формате: prefix + token.
   * @param prefix - Префикс, по умолчанию — `Bearer`
   * @example
   * ```ts
   * AuthUtils.getAuthHeader() // По умолчанию используется "Bearer".
   * AuthUtils.getAuthHeader("Basic") // Пользовательский префикс
   * ```
   */
  static async getAuthHeader(prefix: string = 'Bearer') {
    const token = await this.getToken();
    return `${prefix} ${token}`;
  }

  static async setToken(token: string) {
    await storage.setItem(this.TOKEN_KEY, token);
  }

  static async clearToken() {
    await storage.removeItem(this.TOKEN_KEY);
  }

  static async isAuthenticated() {
    return storage.hasItem(this.TOKEN_KEY);
  }
}
