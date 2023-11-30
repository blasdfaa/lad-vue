<script setup lang="ts">
  import { NButton } from 'naive-ui';
  import { useThemeStore } from '~/stores/theme';

  const theme = useThemeStore();

  const handleChangeTheme = () => {
    theme.toggleTheme();
  };
</script>

<template>
  <NButton quaternary @click="handleChangeTheme">
    {{ theme.isDarkTheme ? 'Light' : 'Dark' }}
  </NButton>
</template>
