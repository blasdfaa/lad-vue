<script setup lang="ts">
  import { NPageHeader } from 'naive-ui';
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

<template>
  <NPageHeader title="About" @back="router.back" />
</template>
