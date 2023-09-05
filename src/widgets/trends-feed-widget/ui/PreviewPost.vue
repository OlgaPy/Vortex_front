<script setup lang="ts">
import PreviewPostUI from '@/entities/post/ui/PreviewPostUI.vue';
import TagsList from '@/entities/tag/ui/TagsList.vue';
import ProfilePreviewUI from "@/entities/profile/ui/ProfilePreviewUI.vue";
import PostPreviewFooter from './PostPreviewFooter.vue';
import type {PreviewPostProps} from "@/widgets/trends-feed-widget/ui/types";

const { post, showFooter, showProfile } = defineProps<PreviewPostProps>();
</script>

<template>
  <PreviewPostUI
      :post="post"
      :show-footer="showFooter"
      :show-profile="showProfile"
  >
    <template #header>
      <ProfilePreviewUI>
        <template #subTitle="{ class: className }">
          <span :class="className">30 августа 2022 в 15:36</span>
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
</template>

<style module lang="scss">
.contentWrapper,
.mediaWrapper {
  width: 100%;
}

.postProfile {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  height: 36px;
  width: 100%;
  border: 1px solid var(--color-gray-22);
  color: var(--color-gray-22);
  font: var(--font-text);
}

.postImage {
  max-width: 100%;
  width: 100%;
}

.mediaWrapper {
  padding: 0;
}

.content {
  padding: 0 30px;
}

@media screen and (max-width: $screen-lg) {
  .mediaWrapper,
  .content {
    padding: 0 12px;
  }
}
</style>
