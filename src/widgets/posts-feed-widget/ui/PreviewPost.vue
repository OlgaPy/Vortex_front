<script setup lang="ts">
import PreviewPostUI from '@/entities/post/ui/PreviewPostUI.vue';
import ProfilePreviewUI from "@/entities/profile/ui/ProfilePreviewUI.vue";
import TagsList from '@/entities/tag/ui/TagsList.vue';
import PostPreviewFooter from '@/widgets/posts-feed-widget/ui/PostPreviewFooter.vue';
import type {PreviewPostProps} from "@/widgets/posts-feed-widget/ui/types";

const props = defineProps<PreviewPostProps>();
</script>

<template>
  <PreviewPostUI
      :post="props.post"
      :show-footer="props.showFooter"
      :show-profile="props.showProfile"
  >
    <template #header>
      <ProfilePreviewUI>
        <template #subTitle="{ class: className }">
          <span :class="className">{{ props.post.created_at }}</span>
        </template>
      </ProfilePreviewUI>
    </template>

    <template #tags>
      <TagsList :tags="props.post.tags"/>
    </template>

    <template #footer>
      <PostPreviewFooter :rating="props.post.rating"/>
    </template>
  </PreviewPostUI>
</template>
