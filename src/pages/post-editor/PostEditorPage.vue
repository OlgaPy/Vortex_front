<script setup lang="ts">
import PageLayout from "@/pages/PageLayout.vue";
import PostEditorFooter from "@/pages/post-editor/ui/PostEditorFooter.vue";
import PostEditorHeader from "@/pages/post-editor/ui/PostEditorHeader.vue";
import PostEditor from "@/widgets/post-editor/PostContentEditorWidget.vue";
</script>

<template>
  <PageLayout>
    <template #content>
      <PostEditorHeader />
      <PostEditor />
      <PostEditorFooter />
    </template>
  </PageLayout>
</template>

<style module lang="scss">
.homeDesktopPage,
.homeMobilePage {
	display: none;
}

@media screen and (min-width: $screen-xs) and (max-width: $screen-xl) {
	.homeMobilePage {
		display: flex;
	}
}

@media screen and (min-width: $screen-xl) {
	.homeDesktopPage {
		display: flex;
	}
}
</style>
