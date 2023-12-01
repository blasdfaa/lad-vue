<script setup lang="ts">
import { NPagination, NSpace, NSpin } from 'naive-ui'
import { defineAsyncComponent, ref } from 'vue'
import ScrollTarget from '~/components/ScrollTarget.vue'
import { useQuotesListQuery } from '~/composables/useQuotesListQuery'
import { useScrollIntoView } from '~/composables/useScrollIntoView'
import type { QuotesListParams } from '~/shared/types/quotes'

const DEFAULT_PAGE = 1

const QuotesList = defineAsyncComponent({
  loader: () => import('~/components/QuotesList.vue'),
  loadingComponent: NSpin,
})

const QuotesSorting = defineAsyncComponent({
  loader: () => import('~/components/QuotesSorting.vue'),
  loadingComponent: NSpin,
})

const params = ref<QuotesListParams>({ page: DEFAULT_PAGE, sortBy: 'dateAdded', order: 'asc', tags: '' })
const { data, isFetching } = useQuotesListQuery(params)

const scrollTargetEl = ref<InstanceType<typeof ScrollTarget>>()
const { scrollTo } = useScrollIntoView(scrollTargetEl)
</script>

<template>
  <main>
    <ScrollTarget ref="scrollTargetEl" />

    <NSpace size="large" vertical>
      <QuotesSorting v-model:sort-by="params.sortBy" v-model:order="params.order" />

      <NSpin :show="isFetching">
        <QuotesList
          :items="
            data?.results.map((r) => ({ id: r._id, author: r.author, content: r.content, tags: r.tags }))
              ?? []
          "
        />
      </NSpin>

      <NPagination
        v-if="data?.totalPages"
        v-model:page="params.page"
        size="large"
        :page-count="data.totalPages"
        @update:page="scrollTo"
      />
    </NSpace>
  </main>
</template>
