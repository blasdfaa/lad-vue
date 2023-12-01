import { createStorage } from 'unstorage';
import localStorageDriver from 'unstorage/drivers/localstorage';

const storage = createStorage<string[]>({
  driver: localStorageDriver({ base: 'likes' }),
});

export class LocalLikeUtils {
  static STORAGE_KEY = 'quoutes';

  static async getLikes() {
    return (await storage.getItem(this.STORAGE_KEY)) ?? [];
  }

  static async setLikes(value: string[]) {
    await storage.setItem(this.STORAGE_KEY, value);
  }

  static async toggleLike(id: string) {
    const current = await this.getLikes();
    const index = current.indexOf(id);

    if (index !== -1) {
      current.splice(index, 1);
      await storage.setItem(this.STORAGE_KEY, current);
    } else {
      current.push(id);
      await storage.setItem(this.STORAGE_KEY, current);
    }
  }

  static async hasLike(id: string) {
    const current = await this.getLikes();
    return current.indexOf(id) !== -1;
  }
}
