<script setup lang="ts">
  import { NGradientText, NSpin } from 'naive-ui';
</script>

<template>
  <main class="loader">
    <NSpin size="large" />
    <span class="mb-1 mt-4 text-xl loader__app-name">QUOTES APP</span>
    <NGradientText type="primary">Powered by LAD</NGradientText>
  </main>
</template>

<style scoped>
  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .loader__app-name {
    font-size: 24px;
    margin-top: 16px;
    margin-bottom: 4px;
  }
</style>
