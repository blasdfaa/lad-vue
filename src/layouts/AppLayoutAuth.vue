<script setup lang="ts">
import { NLayout, NLayoutFooter, NSpace } from 'naive-ui'
import { defineAsyncComponent } from 'vue'

const ThemeSwitcher = defineAsyncComponent(() => import('./components/ThemeSwitcher.vue'))
</script>

<template>
  <NLayout>
    <div class="content">
      <slot />
    </div>

    <NLayoutFooter position="absolute" class="footer" bordered>
      <NSpace align="center" justify="center">
        <ThemeSwitcher />
      </NSpace>
    </NLayoutFooter>
  </NLayout>
</template>

<style lang="css" scoped>
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .footer {
    padding: 10px 0;
  }
</style>
