<script setup lang="ts">
import { ref } from 'vue'

const el = ref<HTMLDivElement | null>(null)

defineExpose({ el })
</script>

<template>
  <div ref="el" class="scroll-target" />
</template>

<style scoped>
  .scroll-target {
    scroll-margin-top: 150px;
  }
</style>
