<script setup lang="ts">
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { BreadcrumbItem } from '~/router/types'

const route = useRoute()

const breadcrumbs = ref<BreadcrumbItem[]>([])

watch(
  route,
  (newRoute) => {
    breadcrumbs.value = newRoute.meta?.breadcrumb?.(route) ?? []
  },
  { immediate: true },
)
</script>

<template>
  <div class="breadcrumbs">
    <NBreadcrumb>
      <NBreadcrumbItem v-for="{ label, to } in breadcrumbs" :key="label">
        <RouterLink v-if="to" :to="to">
          {{ label ?? to }}
        </RouterLink>
        <span v-else>{{ label }}</span>
      </NBreadcrumbItem>
    </NBreadcrumb>
  </div>
</template>

<style lang="css" scoped>
  .breadcrumbs {
    --side-padding: 16px;

    padding: 8px var(--side-padding) 0;
  }

  @media (min-width: 640px) {
    .breadcrumbs {
      --side-padding: 32px;
    }
  }
</style>
