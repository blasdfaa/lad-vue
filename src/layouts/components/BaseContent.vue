<script setup lang="ts">
  import { NPageHeader } from 'naive-ui';
  import { useRoute } from 'vue-router';

  const route = useRoute();
</script>

<template>
  <div class="content">
    <NPageHeader v-if="route.meta.title" class="content__page-header" :title="route.meta.title" />

    <slot />
  </div>
</template>

<style lang="css" scoped>
  .content {
    position: relative;
    min-height: calc(100% - 144px);
    width: 100%;
    padding: 8px;
  }

  @media (min-width: 640px) {
    .content {
      padding: 16px;
    }
  }

  .content__page-header {
    margin-bottom: 8px;
  }
</style>
