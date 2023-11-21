<script setup lang="ts">
  import { NGradientText, NSpin } from 'naive-ui';
</script>

<template>
  <main class="flex h-screen flex-col items-center justify-center">
    <NSpin size="large" class="text-blue-200 dark:text-blue-400" />
    <span class="mb-1 mt-4 text-xl">APP_NAME</span>
    <NGradientText type="primary">Powered by Bit Ocean</NGradientText>
  </main>
</template>
