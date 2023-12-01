<script setup lang="ts">
  import { NSelect, NSpace, type SelectOption } from 'naive-ui';
  import type { QuotesListParams } from '~/shared/types/quotes';

  interface Filters {
    sortBy: QuotesListParams['sortBy'];
    order: QuotesListParams['order'];
  }

  defineProps<{
    sortBy: Filters['sortBy'];
    order: Filters['order'];
  }>();

  const emit = defineEmits<{
    'update:sortBy': [value: string];
    'update:order': [value: string];
  }>();

  const SORT_BY_OPTIONS: SelectOption[] = [
    { label: 'Date Added', value: 'dateAdded' },
    { label: 'Date Modified', value: 'dateModified' },
    { label: 'Author', value: 'author' },
    { label: 'Content', value: 'content' },
  ];

  const ORDER_OPTIONS: SelectOption[] = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
  ];

  function onSortByUpdate(value: string) {
    emit('update:sortBy', value);
  }

  function onOrderUpdate(value: string) {
    emit('update:order', value);
  }
</script>

<template>
  <NSpace>
    <NSelect
      :value="sortBy"
      placeholder="Sort by"
      :options="SORT_BY_OPTIONS"
      @update:value="onSortByUpdate"
    />
    <NSelect :value="order" placeholder="Order" :options="ORDER_OPTIONS" @update:value="onOrderUpdate" />
  </NSpace>
</template>
