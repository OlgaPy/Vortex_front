<script setup lang="ts">
import PostEditorMobilePage from '@/pages/post-editor/ui/PostEditorMobilePage.vue'
import PostEditorDesktopPage from '@/pages/post-editor/ui/PostEditorDesktopPage.vue'
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

<style module>
.homeDesktopPage,
.homeMobilePage {
	display: none;
}

@media screen and (min-width: 360px) and (max-width: 1280px) {
	.homeMobilePage {
		display: flex;
	}
}

@media screen and (min-width: 1280px) {
	.homeDesktopPage {
		display: flex;
	}
}
</style>
