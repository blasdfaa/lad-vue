<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

import ThemeSwitcher from './components/ThemeSwitcher.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';

const drawer = ref(false);

const { mobile } = useDisplay();
</script>

<template>
  <VApp>
    <VLayout class="rounded rounded-md">
      <NavigationDrawer v-model:open="drawer" />

      <VAppBar prominent>
        <VAppBarNavIcon v-if="mobile" @click.stop="drawer = !drawer" />
        <VToolbarTitle>App</VToolbarTitle>

        <template v-slot:append>
          <ThemeSwitcher />
        </template>
      </VAppBar>

      <VMain class="d-flex align-center justify-center" style="min-height: 300px">
        <RouterView />
      </VMain>
    </VLayout>
  </VApp>
</template>

<style scoped></style>
