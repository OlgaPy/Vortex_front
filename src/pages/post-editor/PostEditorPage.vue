<script setup lang="ts">
import PostEditorMobilePage from '@/pages/post-editor/ui/PostEditorMobilePage.vue';
import PostEditorDesktopPage from '@/pages/post-editor/ui/PostEditorDesktopPage.vue';
</script>

<template>
	<div>
		<div :class="$style.homeDesktopPage">
			<PostEditorDesktopPage />
		</div>
		<div :class="$style.homeMobilePage">
			<PostEditorMobilePage />
		</div>
	</div>
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
