<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query';
  import { useDebounceFn } from '@vueuse/core';
  import { NAutoComplete, type AutoCompleteOption } from 'naive-ui';
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { searchQuotes } from '~/api/quotes';
  import { RouteNamesEnum } from '~/enums/routeNamesEnum';

  const SEARCH_INPUT_DELAY = 400; // ms

  const router = useRouter();

  const query = ref('');
  const hasQuery = computed(() => query.value.trim().length > 0);

  const debouncedSearchFn = useDebounceFn(searchQuotes, SEARCH_INPUT_DELAY);
  const { data, isFetching } = useQuery({
    enabled: hasQuery,
    queryKey: ['quotes', 'search', query],
    queryFn: () => debouncedSearchFn(query.value),
    select: prepareOptions,
    retry: false,
    refetchOnWindowFocus: false,
  });

  function prepareOptions(items: Awaited<ReturnType<typeof searchQuotes>>): AutoCompleteOption[] {
    return items.results.map(({ content, _id }) => {
      return {
        label: content,
        value: _id,
      };
    });
  }

  const inputEl = ref<InstanceType<typeof NAutoComplete>>();

  function onSelect(id: string) {
    router.push({ name: RouteNamesEnum.QUOTES_DETAILS, params: { id } });
    // `clear-after-select` prop refuses to work
    inputEl.value?.blur();
  }
</script>

<template>
  <NAutoComplete
    ref="inputEl"
    v-model:value="query"
    :loading="isFetching"
    :options="data"
    placeholder="Search quote"
    clearable
    @select="onSelect"
  />
</template>
