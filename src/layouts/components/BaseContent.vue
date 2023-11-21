<script setup lang="ts"></script>

<template>
  <div class="content">
    <slot />
  </div>
</template>

<style>
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
</style>
