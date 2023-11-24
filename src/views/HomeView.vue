<script setup lang="ts">
  import { defineAsyncComponent } from 'vue';

  const PostsList = defineAsyncComponent(() => import('~/components/PostsList.vue'));
</script>

<template>
  <main>
    <PostsList />
  </main>
</template>
