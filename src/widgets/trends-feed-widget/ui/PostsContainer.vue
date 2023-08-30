<script setup lang="ts">
import { Suspense } from 'vue';
import { storeToRefs } from 'pinia';
import TestPreviewPost from '@/widgets/trends-feed-widget/ui/TestPreviewPost.vue';
import { getPosts } from '@/entities/post';
import { usePostsStore } from '@/shared/stores/PostsStore';
import { InfinityScroll } from '@/shared/lib/InfinityScroll';

const postsStore = usePostsStore();
const { setPosts } = postsStore;
const { posts } = storeToRefs(postsStore);
</script>

<template>
	<Suspense>
		<InfinityScroll :getData="getPosts" :updateData="setPosts">
			<template #content>
				<div :class="$style.container">
					<TestPreviewPost
						v-for="{ title, content, uuid, tags, rating } in posts"
						:title="title"
						:content="content"
						:tags="tags"
						:rating="rating"
						:key="uuid"
						:uuid="uuid"
						:show-profile='true'
						:show-footer='true'
					/>
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
