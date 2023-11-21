<script setup lang="ts">
  import { NButton, NIcon, NTooltip } from 'naive-ui';
  import { useSidebarStore } from '~/stores/sidebar';
  import { MenuOutline } from '@vicons/ionicons5';
  import { defineAsyncComponent } from 'vue';

  const ThemeSwitcher = defineAsyncComponent(() => import('./ThemeSwitcher.vue'));

  const sidebarStore = useSidebarStore();
</script>

<template>
  <header class="header">
    <div class="header__container">
      <NTooltip placement="bottom" trigger="hover">
        <template #trigger>
          <NButton circle quaternary type="tertiary" @click="sidebarStore.toggleDisplay">
            <NIcon size="22" :component="MenuOutline" />
          </NButton>
        </template>

        {{ sidebarStore.isDisplay ? 'Скрыть меню' : 'Показать меню' }}
      </NTooltip>

      <div>
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
  }

  @media (min-width: 640px) {
    .header {
      padding: 16px;
    }
  }

  .header__container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
    height: 100%;
  }
</style>
