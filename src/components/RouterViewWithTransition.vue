<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="router" mode="out-in">
        <component :is="Component" />
      </Transition>
    </template>
  </RouterView>
</template>

<style>
  .router-enter-active,
  .router-leave-active {
    transition: opacity 0.1s ease;
  }
  .router-enter-from,
  .router-leave-to {
    opacity: 0;
  }
</style>
