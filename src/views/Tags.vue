<script setup lang="ts">
  import { KeyOutline, MailOutline } from '@vicons/ionicons5';
  import { NCard, NA, NPageHeader, NInput, NSpace, NIcon, NButton } from 'naive-ui';
  import { ref } from 'vue';

  const formState = ref({
    email: '',
    password: '',
  });
</script>

<template>
  <main class="root">
    <NPageHeader class="header" title="Login">
      <template #extra>
        <NA>Forgot password?</NA>
      </template>
    </NPageHeader>

    <NCard embedded :bordered="false">
      <NSpace vertical size="large">
        <NInput v-model:value="formState.email" type="text" placeholder="Email" size="large">
          <template #prefix><NIcon :component="MailOutline" /></template>
        </NInput>

        <NInput
          v-model:value="formState.password"
          type="password"
          placeholder="Password"
          show-password-on="click"
          size="large"
        >
          <template #prefix><NIcon :component="KeyOutline" /></template>
        </NInput>

        <NButton type="primary" block size="large">Log in</NButton>
      </NSpace>
    </NCard>
  </main>
</template>

<style lang="css" scoped>
  .root {
    max-width: 350px;
    width: 100%;
  }

  .header {
    margin-bottom: 12px;
  }
</style>
