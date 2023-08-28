<script setup lang="ts">
import ShowViewedPosts from '@/features/ShowViewedPosts.vue'
import MobileMainBlockUI from "@/shared/ui/block-ui/MobileMainBlockUI.vue";
import { PostsContainer } from '@/widgets/trends-feed-widget';
</script>

<template>
	<MobileMainBlockUI>
		<header :class="$style.header">
			<ShowViewedPosts :class="$style.showViewedPosts" />
		</header>
		<main :class="[$style.feed, 'color-bg-base-bg']">
			<PostsContainer />
		</main>
	</MobileMainBlockUI>
</template>

<style module>
.header {
	display: flex;
	justify-content: start;
	width: 100%;
	padding: 16px 0;
}
.showViewedPosts {
	padding: 4px 12px;
	font: var(--font-small);
}

.feed {
	display: flex;
	justify-items: start;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 10px;
}

@media screen and (min-width: 834px) {
	.showViewedPosts {
		padding: 4px 0;
	}
}
</style>
