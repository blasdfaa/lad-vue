<script setup lang="ts">
  import { NSpace, NTag } from 'naive-ui';

  defineProps<{ items: string[] }>();
</script>

<template>
  <NSpace size="small">
    <NTag v-for="tag in items" :key="tag" :bordered="false" type="info" size="small">
      {{ tag }}
    </NTag>
  </NSpace>
</template>
