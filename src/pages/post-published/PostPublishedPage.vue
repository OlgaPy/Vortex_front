<script setup lang="ts">
import PageLayout from "@/pages/PageLayout.vue";
import PostPublishedDesktop from './ui/PostPublishedDesktop.vue';
import PostPublishedMobile from './ui/PostPublishedMobile.vue';
import PostPublishedTable from './ui/PostPublishedTable.vue';
</script>

<template>
  <PageLayout>
    <template #content-desktop>
      <PostPublishedDesktop />
    </template>
    <template #content-table>
      <PostPublishedTable />
    </template>
    <template #content-mobile>
      <PostPublishedMobile />
    </template>
  </PageLayout>
</template>
