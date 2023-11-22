import { darkTheme, lightTheme } from 'naive-ui';
import { acceptHMRUpdate, defineStore } from 'pinia';

import { computed, ref, watch } from 'vue';
import { Theme, ThemeUtils } from '~/lib/utils/theme';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(ThemeUtils.getDefaultTheme());

  const isLightTheme = computed(() => theme.value === Theme.LIGHT);

  const isDarkTheme = computed(() => theme.value === Theme.DARK);

  /**
   * @description В соответствии с текущей темой возвращает соответствующую тему Naive UI.
   */
  const naiveTheme = computed(() => (isLightTheme.value ? lightTheme : darkTheme));

  const setTheme = (selectedTheme: Theme) => {
    theme.value = selectedTheme;
  };

  const toggleTheme = () => {
    theme.value = isLightTheme.value ? Theme.DARK : Theme.LIGHT;
  };

  const onThemeChange = (selectedTheme: Theme) => {
    ThemeUtils.changeTheme(selectedTheme);
  };

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
