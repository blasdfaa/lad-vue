<script setup lang="ts">
  import BaseHeader from './components/BaseHeader.vue';
  import BaseSidebar from './components/BaseSidebar.vue';
  import BaseContent from './components/BaseContent.vue';
  import GlobalLoading from '~/components/GlobalLoading.vue';

  // TODO: Добавить состояние загрузки пользователя
  const loading = false;
</script>

<template>
  <template v-if="loading">
    <GlobalLoading />
  </template>

  <template v-else>
    <main class="layout">
      <div class="layout__container">
        <BaseSidebar />

        <div class="layout__wrapper">
          <BaseHeader />
          <BaseContent>
            <slot />
          </BaseContent>
        </div>
      </div>
    </main>
  </template>
</template>

<style lang="css" scoped>
  .layout {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .layout__container {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .layout__wrapper {
    position: relative;
    height: 100%;
    flex: 1 1 0%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
