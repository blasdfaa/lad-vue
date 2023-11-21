import { darkTheme, lightTheme } from 'naive-ui';
import { acceptHMRUpdate, defineStore } from 'pinia';

import { computed, ref, watch } from 'vue';
import { Theme, ThemeUtils } from '~/lib/utils/theme';

export const useThemeStore = defineStore('theme', () => {
  /**
   * 主题模式
   * @description
   * 可选值：`light` | `dark`
   */
  const theme = ref(ThemeUtils.getDefaultTheme());

  /**
   * 是否为浅色主题
   */
  const isLightTheme = computed(() => theme.value === Theme.LIGHT);

  /**
   * 是否为深色主题
   */
  const isDarkTheme = computed(() => theme.value === Theme.DARK);

  /**
   * Naive UI 组件主题
   * @description 根据当前主题模式，返回对应的 Naive UI 主题
   */
  const naiveTheme = computed(() => (isLightTheme.value ? lightTheme : darkTheme));

  /**
   * 设置主题
   * @param selectedTheme 主题
   */
  const setTheme = (selectedTheme: Theme) => {
    theme.value = selectedTheme;
  };

  /**
   * 切换主题
   */
  const toggleTheme = () => {
    theme.value = isLightTheme.value ? Theme.DARK : Theme.LIGHT;
  };

  /**
   * 修改主题模式
   * @description
   * - 切换主题模式时，会自动添加或移除 document 上 `dark` 类名
   * - 将主题模式存储到 localStorage 中，以便下次打开页面时读取
   */
  const onThemeChange = (selectedTheme: Theme) => {
    ThemeUtils.changeTheme(selectedTheme);
  };

  watch(
    () => theme.value,
    () => onThemeChange(theme.value),
    // NOTE: 初始化时，根据系统主题设置主题模式
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
