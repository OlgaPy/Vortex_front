<script setup lang="ts">
import PageLayout from '@/widgets/page-layout/PageLayout.vue';
import type {ICorePost} from "@/entities/post/model/types";
import PreviewPostUI from "@/entities/post/ui/PreviewPostUI.vue";
import TagsList from "@/entities/tag/ui/TagsList.vue";
import ProfilePreviewUI from "@/entities/profile/ui/ProfilePreviewUI.vue";
import BlockUI from "@/shared/ui/block-ui/BlockUI.vue";
import PostPreviewActionsFeature from "@/widgets/trends-feed-widget/ui/PostPreviewFooter.vue";

//TODO
const mockPost: ICorePost = {
  tags: ['tag 1', 'tag 1', 'tag 1'],
  title: 'Title',
  content: [
    { type: 'text', value: 'Content' },
  ]
};
</script>

<template>
	<PageLayout>
		<template #content>
      <BlockUI :class="$style.info">
        <h2>Предпросмотр поста</h2>
        <p>Так будет выглядеть ваш пост, внимательно проверьте его.</p>
      </BlockUI>

      <PreviewPostUI :post="mockPost">
        <template #header>
          <ProfilePreviewUI>
            <template #subTitle="{ class: className }">
              <span :class="className">30 августа 2022 в 15:36</span>
            </template>
          </ProfilePreviewUI>
        </template>

        <template #tags>
          <TagsList :tags="mockPost.tags"/>
        </template>

        <template #footer>
          <PostPreviewActionsFeature rating="0"/>
        </template>
      </PreviewPostUI>
		</template>
	</PageLayout>
</template>

<style module lang="scss">
.info > h2 {
  font: var(--font-sub-title-bold);
}
.info > p {
  font: var(--font-text);
}
</style>
