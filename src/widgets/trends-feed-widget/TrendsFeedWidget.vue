<script setup lang="ts">
import ShowViewedPosts from "@/features/ShowViewedPosts.vue";
import TestPreviewPost from "@/widgets/trends-feed-widget/ui/TestPreviewPost.vue";
import InputUI from "@/shared/ui/input-ui/InputUI.vue";
import {InputType} from "@/shared/ui/input-ui/types";
</script>

<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <ShowViewedPosts/>
    </header>
    <main :class="$style.feed">
      <TestPreviewPost/>
      <TestPreviewPost/>
      <TestPreviewPost/>
    </main>
  </div>
</template>

<style module>
.container {
  display: flex;
  justify-items: start;
  align-items: start;
  flex-direction: column;
  width: 100%;
}

.header {
  padding: 16px 0;
}

.feed {
  display: flex;
  justify-items: start;
  align-items: start;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  background-color: var(--ui-main-color);
}
</style>
