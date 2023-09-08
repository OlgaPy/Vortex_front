<script setup lang="ts">
import type {ICorePost} from "@/entities/post/model/types";
import PreviewPostUI from "@/entities/post/ui/PreviewPostUI.vue";
import ProfilePreviewUI from "@/entities/profile/ui/ProfilePreviewUI.vue";
import TagsList from "@/entities/tag/ui/TagsList.vue";
import GoToPrevPage from "@/features/GoToPrevPage.vue";
import PageLayout from '@/pages/PageLayout.vue';
import UniformBlockUI from "@/shared/ui/block-ui/blocks/UniformBlockUI.vue";
import HeaderWidget from "@/widgets/HeaderWidget.vue";

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
    <template #header-mobile>
      <HeaderWidget>
        <template #left-content>
          <GoToPrevPage>
            <slot name="prevPageTitle"></slot>
          </GoToPrevPage>
        </template>
      </HeaderWidget>
    </template>

		<template #content>
      <UniformBlockUI :class="$style.info">
        <h2>Предпросмотр поста</h2>
        <p>Так будет выглядеть ваш пост, внимательно проверьте его.</p>
      </UniformBlockUI>

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
