<script setup lang="ts">
import PreviewPostUI from '@/entities/post/ui/PreviewPostUI.vue';
import TagsList from '@/entities/tag/ui/TagsList.vue';
import PostPreviewFooterUI from '@/widgets/trends-feed-widget/ui/PostPreviewFooterUI.vue';
import type { IPost } from '@/shared/stores/PostsStore';

const { title, content, tags, rating } = defineProps<IPost>();
const posts = Object.entries(content);
</script>

<template>
	<PreviewPostUI>
		<template #header>
			<div :class="$style.postProfile">TODO Здесь будет профиль</div>
		</template>
		<template #title>{{ title }}</template>
		<template #tags>
			<TagsList :tags="tags" />
		</template>
		<template #body>
			<div v-for="[id, { type, value }] in posts" :key="id">
				<img v-if="type === 'img'" :src="value" :class="$style.postImage" alt="Post Image" />
				<span v-else>
					{{ value }}
				</span>
			</div>
		</template>
		<template #footer>
			<PostPreviewFooterUI :rating="rating" />
		</template>
	</PreviewPostUI>
</template>

<style module>
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
}
</style>
