<script setup lang="ts">
import PreviewPostUI from '@/entities/post/ui/PreviewPostUI.vue'
import TagsList from '@/entities/tag/ui/TagsList.vue'
import PostPreviewFooterUI from '@/widgets/trends-feed-widget/ui/PostPreviewFooterUI.vue'
import type { IPost } from '@/shared/stores/PostsStore'

const { title, body, img, tags } = defineProps<IPost>();
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
			<slot></slot>
			<img v-show="img" :src="img" :class="$style.postImage" alt="Post Image" />
			<span>
				{{ body }}
			</span>
		</template>
		<template #footer>
			<PostPreviewFooterUI />
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
