<script setup lang="ts">
import { useDisplay } from 'vuetify';

defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const { mobile } = useDisplay();
</script>

<template>
  <VNavigationDrawer :model-value="mobile ? open : true" @update:model-value="(value) => emit('update:open', value)">
    <VList>
      <VListItem
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      >
      </VListItem>
    </VList>

    <VDivider></VDivider>

    <VList density="compact" nav>
      <VListItem prepend-icon="mdi-home" title="Home" to="/"></VListItem>
      <VListItem prepend-icon="mdi-information" title="About" to="/about"></VListItem>
    </VList>
  </VNavigationDrawer>
</template>
