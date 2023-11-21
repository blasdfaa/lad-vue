<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui';
  import AppLayout from './layouts/AppLayout.vue';
  import { useThemeStore } from './stores/theme';

  const theme = useThemeStore();
</script>

<template>
  <NConfigProvider :theme="theme.isDarkTheme ? darkTheme : null">
    <NGlobalStyle />

    <AppLayout>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition name="router" mode="out-in">
            <component :is="Component" class="text-base" />
          </Transition>
        </template>
      </RouterView>
    </AppLayout>
  </NConfigProvider>
</template>

<style>
  * {
    box-sizing: border-box;
  }
</style>
