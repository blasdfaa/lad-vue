import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { LocalLikeUtils } from '~/lib/utils/localLike';

export const useLocalLikeStore = defineStore('localLike', () => {
  const likes = ref<string[]>([]);

  const hasLike = computed(() => (id: string) => likes.value.includes(id));

  function toggleLike(id: string) {
    const index = likes.value.indexOf(id);

    if (index !== -1) {
      likes.value.splice(index, 1);
    } else {
      likes.value.push(id);
    }
  }

  async function onLikesChange(value: string[]) {
    await LocalLikeUtils.setLikes(value);
  }

  async function init() {
    likes.value = await LocalLikeUtils.getLikes();
  }

  init();

  watch(
    () => likes.value,
    () => onLikesChange(likes.value),
    { immediate: true, deep: true }
  );

  return { hasLike, toggleLike };
});

/**
 * HMR
 * @see https://pinia.vuejs.org/zh/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocalLikeStore, import.meta.hot));
}
