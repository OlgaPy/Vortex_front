<script setup lang="ts">
import {usePostsFeedStore} from "@/entities/posts-feed/model/posts-feed-store/posts-feed-store";
import PreviewPostUI from "@/entities/post/ui/PreviewPostUI.vue";
import InfinityScroll from "@/shared/lib/InfinityScroll/InfinityScroll.vue";
import TagsList from "@/entities/tag/ui/TagsList.vue";
import ProfilePreviewUI from "@/entities/profile/ui/ProfilePreviewUI.vue";
import PostPreviewFooter from "./PostPreviewFooter.vue";

const postsStore = usePostsFeedStore();
const {addPosts, getNextPosts} = postsStore;
</script>

<template>
  <Suspense>
    <!--  TODO types incapability  -->
    <InfinityScroll :getData="getNextPosts" :updateData="addPosts">
      <template #content>
        <div :class="$style.container">
          <PreviewPostUI
              v-for="post in postsStore.posts"
              :key="post.uuid"
              :post="post"
              :show-profile="true"
              :show-footer="true"
          >
            <template #header>
              <ProfilePreviewUI>
                <template #subTitle="{ class: className }">
                  <span :class="className">{{ post.created_at }}</span>
                </template>
              </ProfilePreviewUI>
            </template>

            <template #tags>
              <TagsList :tags="post.tags"/>
            </template>

            <template #footer>
              <PostPreviewFooter :rating="post.rating"/>
            </template>
          </PreviewPostUI>
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
