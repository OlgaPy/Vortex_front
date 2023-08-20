<script setup lang="ts">
import ShowViewedPosts from '@/features/ShowViewedPosts.vue'
import TestPreviewPost from '@/widgets/trends-feed-widget/ui/TestPreviewPost.vue'
</script>

<template>
	<div :class="$style.container">
		<header :class="$style.header">
			<ShowViewedPosts :class="$style.showViewedPosts" />
		</header>
		<main :class="[$style.feed, 'color-bg-base-bg']">
			<TestPreviewPost />
			<TestPreviewPost />
			<TestPreviewPost />
		</main>
	</div>
</template>

<style module>
.container {
	display: flex;
	justify-items: start;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 786px;
}

.header {
	display: flex;
	justify-content: start;
	width: 100%;
	padding: 16px 0;
}
.showViewedPosts {
	padding: 4px 12px;
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
