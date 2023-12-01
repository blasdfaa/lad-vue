<script setup lang="ts">
import { NList, NListItem, NThing } from 'naive-ui'
import { useRouter } from 'vue-router'
import TagsList from './TagsList.vue'
import LikeButton from './LikeButton.vue'
import { RouteNamesEnum } from '~/enums/routeNamesEnum'

interface QuoteItem {
  id: string
  tags: string[]
  content: string
  author: string
}

defineProps<{
  items: QuoteItem[]
}>()

const router = useRouter()

function navigateToDetails(id: string) {
  router.push({ name: RouteNamesEnum.QUOTES_DETAILS, params: { id } })
}
</script>

<template>
  <NList hoverable clickable bordered>
    <NListItem v-for="{ content, author, id, tags } in items" :key="id" @click="() => navigateToDetails(id)">
      <template #suffix>
        <LikeButton :id="id" />
      </template>

      <NThing :title="author" :content="content">
        <template #description>
          <TagsList :items="tags" />
        </template>
      </NThing>
    </NListItem>
  </NList>
</template>
