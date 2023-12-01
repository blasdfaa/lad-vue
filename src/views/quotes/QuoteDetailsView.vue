<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query';
  import { NDescriptions, NDescriptionsItem, NSkeleton, NSpace } from 'naive-ui';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchQuouteDetails } from '~/api/quotes';
  import LikeButton from '~/components/LikeButton.vue';
  import TagsList from '~/components/TagsList.vue';

  const route = useRoute();
  const quoteId = computed(() => route.params.id);
  const hasParam = computed(() => !!quoteId.value);

  const { isLoading, isError, data } = useQuery({
    enabled: hasParam,
    queryKey: ['quotes', 'item', quoteId],
    queryFn: () => fetchQuouteDetails(route.params.id as string),
  });
</script>

<template>
  <main>
    <template v-if="isLoading">
      <NSkeleton text :repeat="2" />
      <NSkeleton text style="width: 60%" />
    </template>

    <p v-if="isError">ERROR</p>

    <NDescriptions v-if="data" size="large" label-placement="left">
      <template #header>
        <NSpace justify="space-between" :wrap="false">
          <span>{{ `- ${data.content}` }}</span>
          <LikeButton :id="data._id" />
        </NSpace>
      </template>

      <NDescriptionsItem label="Author"> {{ data.author }} </NDescriptionsItem>

      <NDescriptionsItem label="Tags"> <TagsList :items="data.tags" /> </NDescriptionsItem>

      <NDescriptionsItem label="Length">{{ data.length }} </NDescriptionsItem>
    </NDescriptions>
  </main>
</template>
