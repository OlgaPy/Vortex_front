<script setup lang="ts">
import InfinityScroll from "@/shared/lib/InfinityScroll/InfinityScroll.vue";
import type {PostsFeedProps} from "@/entities/posts-feed/ui/types";

const props = defineProps<PostsFeedProps>();
const {getNextPosts, addPosts} = props;
</script>

<template>
  <Suspense>
    <!--  TODO types incapability  -->
    <InfinityScroll :getData="getNextPosts" :updateData="addPosts">
      <template #content>
        <div :class="$style.container">
					<slot name="post" :post="post" v-for="post in props.posts" :key="post.uuid"></slot>
        </div>
      </template>

      <template #loader>
        <div :class="[$style.loader, 'color-bg-gray-98']">Загрузка постов...</div>
      </template>

      <template #noData>
        <div :class="[$style.loader, 'color-bg-gray-98']">Все посты просмотрены!</div>
      </template>
    </InfinityScroll>

    <template #feedback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.loader {
  padding: 10px;
  color: var(--color-gray-14);
}

@media screen and (min-width: $screen-lg) {
  .loader {
    border-radius: var(--style-radius-10);
  }
}
</style>
