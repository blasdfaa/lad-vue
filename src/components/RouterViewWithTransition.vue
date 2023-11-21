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
