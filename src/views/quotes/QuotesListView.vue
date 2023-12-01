<script setup lang="ts">
  import { NSpin } from 'naive-ui';
  import { defineAsyncComponent } from 'vue';

  const QuotesList = defineAsyncComponent({
    loader: () => import('~/components/QuotesList.vue'),
    loadingComponent: NSpin,
  });
</script>

<template>
  <main> <QuotesList /></main>
</template>
