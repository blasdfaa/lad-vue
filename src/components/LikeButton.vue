<script setup lang="ts">
import { HeartOutline, HeartSharp } from '@vicons/ionicons5'
import { NButton, NIcon } from 'naive-ui'
import { useLocalLikeStore } from '~/stores/modules/localLike'

const props = defineProps<{ id: string }>()

const likeStore = useLocalLikeStore()

function onToggle() {
  likeStore.toggleLike(props.id)
}
</script>

<template>
  <NButton circle quaternary @click.stop="onToggle">
    <template #icon>
      <NIcon>
        <HeartSharp v-if="likeStore.hasLike(id)" />
        <HeartOutline v-else />
      </NIcon>
    </template>
  </NButton>
</template>
