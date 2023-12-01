<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query';
  import { NSpace, NSpin, NTag, NText } from 'naive-ui';
  import { fetchTagsList } from '~/api/tags';

  const { data, isPending } = useQuery({
    queryKey: ['tags'],
    queryFn: () => fetchTagsList(),
  });
</script>

<template>
  <main>
    <NSpin :show="isPending">
      <NSpace justify="center" align="center" size="large">
        <NTag v-for="tag in data ?? []" :key="tag._id" size="large">
          {{ tag.name }}
          <NText strong>
            {{ tag.quoteCount }}
          </NText>
        </NTag>
      </NSpace>
    </NSpin>
  </main>
</template>
