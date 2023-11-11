<script setup lang="ts">
import { useTheme } from 'vuetify';

const theme = useTheme();

function updateTheme(value: string) {
  theme.global.name.value = value;
}
</script>

<template>
  <VSwitch
    :model-value="theme.global.name.value"
    @update:model-value="(event) => updateTheme(event as unknown as string)"
    true-value="light"
    false-value="dark"
    hide-details
  >
    <template #prepend><VIcon icon="mdi-weather-night" /></template>
    <template #append><VIcon icon="mdi-weather-sunny" /></template>
  </VSwitch>
</template>
