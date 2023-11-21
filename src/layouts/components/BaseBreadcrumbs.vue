<script setup lang="ts">
  import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui';
  import { useRoute } from 'vue-router';

  const route = useRoute();
</script>

<template>
  <div class="breadcrumbs">
    <NBreadcrumb>
      <NBreadcrumbItem v-for="{ path, meta } in route.matched" :key="path">
        <RouterLink :to="path">{{ meta.title ?? path }}</RouterLink>
      </NBreadcrumbItem>
    </NBreadcrumb>
  </div>
</template>

<style lang="css" scoped>
  .breadcrumbs {
    --side-padding: 16px;

    padding: 8px var(--side-padding) 0;
  }

  @media (min-width: 640px) {
    .breadcrumbs {
      --side-padding: 32px;
    }
  }
</style>
