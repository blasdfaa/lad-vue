import { darkTheme, lightTheme } from 'naive-ui';
import { acceptHMRUpdate, defineStore } from 'pinia';

import { computed, ref, watch } from 'vue';
import { Theme, ThemeUtils } from '~/lib/utils/theme';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref();

  const isLightTheme = computed(() => theme.value === Theme.LIGHT);

  const isDarkTheme = computed(() => theme.value === Theme.DARK);

  /**
   * @description В соответствии с текущей темой возвращает соответствующую тему Naive UI.
   */
  const naiveTheme = computed(() => (isLightTheme.value ? lightTheme : darkTheme));

  function setTheme(selectedTheme: Theme) {
    theme.value = selectedTheme;
  }

  function toggleTheme() {
    theme.value = isLightTheme.value ? Theme.DARK : Theme.LIGHT;
  }

  async function onThemeChange(selectedTheme: Theme) {
    await ThemeUtils.changeTheme(selectedTheme);
  }

  async function initializeTheme() {
    theme.value = await ThemeUtils.getDefaultTheme();
  }

  initializeTheme();

  watch(
    () => theme.value,
    () => onThemeChange(theme.value),
    { immediate: true }
  );

  return {
    theme,
    naiveTheme,
    setTheme,
    toggleTheme,
    isLightTheme,
    isDarkTheme,
  };
});

/**
 * HMR
 * @see https://pinia.vuejs.org/zh/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot));
}
