<script setup lang="ts">
  import axios from 'axios';
  import { NListItem, NList, NThing, NSpin } from 'naive-ui';
  import { onMounted, ref } from 'vue';

  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const posts = ref<Post[]>([]);
  const isLoading = ref(false);

  onMounted(() => {
    isLoading.value = true;
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        posts.value = data;
      })
      .finally(() => {
        isLoading.value = false;
      });
  });
</script>

<template>
  <NSpin :show="isLoading">
    <NList hoverable clickable bordered>
      <NListItem v-for="post in posts" :key="post.id">
        <NThing :title="post.title" :content="post.body" />
      </NListItem>
    </NList>
  </NSpin>
</template>
