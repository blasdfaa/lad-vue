<script setup lang="ts">
import { NLayout } from 'naive-ui'
import { onMounted, ref } from 'vue'
import BaseHeader from './components/BaseHeader.vue'
import BaseSidebar from './components/BaseSidebar.vue'
import BaseContent from './components/BaseContent.vue'
import BaseBreadcrumbs from './components/BaseBreadcrumbs.vue'
import GlobalLoading from '~/components/GlobalLoading.vue'

const LOADING_DELAY = 1500 // 2sec

const loading = ref(true)

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, LOADING_DELAY))
  loading.value = false
})
</script>

<template>
  <template v-if="loading">
    <GlobalLoading />
  </template>

  <template v-else>
    <NLayout class="layout">
      <div class="layout__container">
        <BaseSidebar />

        <div class="layout__wrapper">
          <BaseHeader />
          <BaseBreadcrumbs />
          <BaseContent>
            <slot />
          </BaseContent>
        </div>
      </div>
    </NLayout>
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
