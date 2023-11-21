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
    padding: 0 8px;
  }

  @media (min-width: 640px) {
    .breadcrumbs {
      padding: 0 16px;
    }
  }
</style>
