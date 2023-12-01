<script setup lang="ts">
  import { NListItem, NList, NThing, NSpin, NPagination, NSpace } from 'naive-ui';
  import { ref } from 'vue';
  import { useQuotesListQuery } from '~/composables/useQuotesListQuery';
  import { useScrollIntoView } from '~/composables/useScrollIntoView';
  import ScrollTarget from './ScrollTarget.vue';
  import { useRouter } from 'vue-router';
  import { RouteNamesEnum } from '~/enums/routeNamesEnum';
  import TagsList from './TagsList.vue';
  import LikeButton from './LikeButton.vue';

  const DEFAULT_PAGE = 1;

  const router = useRouter();

  const params = ref({ page: DEFAULT_PAGE });
  const { data, isPending } = useQuotesListQuery(params);

  const scrollTargetEl = ref<InstanceType<typeof ScrollTarget>>();
  const { scrollTo } = useScrollIntoView(scrollTargetEl);

  function navigateToDetails(id: string) {
    router.push({ name: RouteNamesEnum.QUOTES_DETAILS, params: { id } });
  }
</script>

<template>
  <NSpin :show="isPending">
    <ScrollTarget ref="scrollTargetEl" />

    <NSpace size="large" vertical>
      <NList hoverable clickable bordered>
        <NListItem
          v-for="{ content, author, _id, tags } in data?.results"
          :key="_id"
          @click="() => navigateToDetails(_id)"
        >
          <template #suffix>
            <LikeButton :id="_id" />
          </template>

          <NThing :title="author" :content="content">
            <template #description>
              <TagsList :items="tags" />
            </template>
          </NThing>
        </NListItem>
      </NList>

      <NPagination
        v-if="data?.totalPages"
        v-model:page="params.page"
        :size="'large'"
        :page-count="data.totalPages"
        @update:page="scrollTo"
      />
    </NSpace>
  </NSpin>
</template>
