<script setup lang="ts">
  import { NButton, NIcon, NMenu, NScrollbar, useThemeVars } from 'naive-ui';
  import { useSidebarStore } from '~/stores/sidebar';
  import { menuOptions } from '../contants';
  import { ref } from 'vue';
  import { ChevronBackCircleOutline } from '@vicons/ionicons5';
  import { useRoute } from 'vue-router';
  import { watchEffect } from 'vue';

  const sidebarStore = useSidebarStore();
  const theme = useThemeVars();
  const route = useRoute();

  const selectedKey = ref(route.name as string);

  function handleChangeRouter() {
    selectedKey.value = route.name as string;
  }

  watchEffect(() => {
    handleChangeRouter();
  });
</script>

<template>
  <div
    class="sidebar"
    :class="[
      sidebarStore.isDisplay
        ? sidebarStore.isCollapse
          ? 'sidebar--collapsed'
          : 'sidebar--full-width'
        : 'sidebar--hidden border-r-0',
    ]"
    :style="{ '--bg-color': theme.bodyColor }"
  >
    <div class="sidebar__menu">
      <NScrollbar :size="10">
        <NMenu
          v-model:value="selectedKey"
          :collapsed-icon-size="20"
          :collapsed="sidebarStore.isCollapse"
          :options="menuOptions"
          :collapsed-width="64"
          :root-indent="18"
          :indent="26"
          @update-value="console.log"
        />
      </NScrollbar>
    </div>

    <NButton
      v-if="sidebarStore.isDisplay"
      type="tertiary"
      class="collapser"
      quaternary
      @click="sidebarStore.toggleCollapse"
    >
      <NIcon size="24" :component="ChevronBackCircleOutline" />
    </NButton>
  </div>

  <div
    class="overlay"
    :class="sidebarStore.isDisplay ? 'overlay--showed' : 'overlay--hidden'"
    @click="sidebarStore.toggleDisplay"
  />
</template>

<style lang="css" scoped>
  .sidebar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    transition: width ease-in-out 0.1s;
    background-color: var(--bg-color);
  }

  @media (min-width: 640px) {
    .sidebar {
      position: static;
    }
  }

  .sidebar--hidden {
    width: 0;
  }

  .sidebar--full-width {
    width: 220px;
  }

  .sidebar--collapsed {
    width: 64px;
  }

  .sidebar__menu {
    height: calc(100% - 40px);
  }

  .collapser {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 8px;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-color: black;
    opacity: 0.4;
    z-index: 75;
  }

  .overlay--showed {
    display: block;
  }

  .overlay--hidden {
    display: none;
  }

  @media (min-width: 640px) {
    .overlay {
      display: none;
    }
  }
</style>
