<script setup lang="ts">
  import { NButton } from 'naive-ui';
  import { useThemeStore } from '~/stores/theme';

  const theme = useThemeStore();

  function handleChangeTheme() {
    theme.toggleTheme();
  }
</script>

<template>
  <NButton quaternary type="tertiary" @click="handleChangeTheme">
    {{ theme.isDarkTheme ? 'Light' : 'Dark' }}
  </NButton>
</template>
