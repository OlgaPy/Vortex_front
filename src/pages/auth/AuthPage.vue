<script setup lang="ts">
import PageLayout from "@/pages/PageLayout.vue";
import AuthWidget from "@/widgets/auth-widget/AuthWidget.vue";
</script>

<template>
	<PageLayout>
    <template #content-mobile>
      <AuthWidget/>
    </template>
  </PageLayout>
</template>
