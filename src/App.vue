<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui'
import AppLayout from './layouts/AppLayout.vue'
import { useThemeStore } from './stores/modules/theme'
import RouterViewWithTransition from './components/RouterViewWithTransition.vue'

const theme = useThemeStore()
</script>

<template>
  <NConfigProvider :theme="theme.isDarkTheme ? darkTheme : null">
    <NGlobalStyle />

    <AppLayout>
      <RouterViewWithTransition />
    </AppLayout>
  </NConfigProvider>
</template>

<style>
  * {
    box-sizing: border-box;
  }
</style>
