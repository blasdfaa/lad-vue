<script setup lang="ts">
  import { NButton, NIcon, NLayoutHeader, NSpace, NTooltip } from 'naive-ui';
  import { useSidebarStore } from '~/stores/sidebar';
  import { MenuOutline, PersonOutline } from '@vicons/ionicons5';
  import { defineAsyncComponent } from 'vue';
  import { RouterLink } from 'vue-router';
  import { RouteNamesEnum } from '~/enums/routeNamesEnum';

  const ThemeSwitcher = defineAsyncComponent(() => import('./ThemeSwitcher.vue'));

  const sidebarStore = useSidebarStore();
</script>

<template>
  <NLayoutHeader class="header" bordered>
    <div class="header__container">
      <NTooltip placement="bottom" trigger="hover">
        <template #trigger>
          <NButton circle quaternary type="tertiary" @click="sidebarStore.toggleDisplay">
            <NIcon size="22" :component="MenuOutline" />
          </NButton>
        </template>

        {{ sidebarStore.isDisplay ? 'Скрыть меню' : 'Показать меню' }}
      </NTooltip>

      <NSpace>
        <ThemeSwitcher />
        <RouterLink v-slot="{ navigate }" :to="{ name: RouteNamesEnum.SIGN_IN }" custom>
          <NButton quaternary @click="navigate">
            <template #icon>
              <NIcon :component="PersonOutline" />
            </template>
            Auth
          </NButton>
        </RouterLink>
      </NSpace>
    </div>
  </NLayoutHeader>
</template>

<style lang="css" scoped>
  .header {
    --header-height: 56px;
    --side-padding: 16px;

    position: sticky;
    top: 0;
    z-index: 50;
    align-items: center;
    display: grid;
    grid-template-rows: calc(var(--header-height) - 1px);
    padding: 0 var(--side-padding);
  }

  @media (min-width: 640px) {
    .header {
      --side-padding: 32px;
    }
  }

  .header__container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 24px;
    height: 100%;
  }
</style>
