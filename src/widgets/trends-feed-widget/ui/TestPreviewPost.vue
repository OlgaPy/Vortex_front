<script setup lang="ts">
import PreviewPostUI from '@/entities/post/ui/PreviewPostUI.vue';
import TagsList from '@/entities/tag/ui/TagsList.vue';
import PostPreviewFooterUI from '@/widgets/trends-feed-widget/ui/PostPreviewFooterUI.vue';
import ProfilePreviewUI from '@/entities/profile/ui/ProfilePreviewUI.vue';
import type { IPostPreview } from './types';

const { title, content, tags, rating, showFooter, showProfile } = withDefaults(
	defineProps<IPostPreview>(),
	{
		showFooter: true,
		showProfile: true
	}
);
const posts = Object.entries(content);
</script>

<template>
	<PreviewPostUI :show-footer="showFooter" :show-profile="showProfile">
		<template #header>
			<ProfilePreviewUI
				><template #subTitle="{ class: className }"
					><span name="subTitle" :class="className">30 августа 2022 в 15:36</span></template
				></ProfilePreviewUI
			>
		</template>
		<template #title>{{ title }}</template>
		<template #tags>
			<TagsList :tags="tags" />
		</template>
		<template #body>
			<div v-for="[id, { type, value }] in posts" :key="id" :class="$style.contentWrapper">
				<div v-if="type === 'img'" :class="$style.mediaWrapper">
					<img :src="value" :class="$style.postImage" alt="Post Image" />
				</div>
				<div v-else :class="$style.content">
					<span>
						{{ value }}
					</span>
				</div>
			</div>
		</template>
		<template #footer>
			<PostPreviewFooterUI :rating="rating" />
		</template>
	</PreviewPostUI>
</template>

<style module lang="scss">
.contentWrapper,
.mediaWrapper {
	width: 100%;
}

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
	width: 100%;
}

.mediaWrapper {
	padding: 0;
}

.content {
	padding: 0 30px;
}

@media screen and (max-width: $screen-lg) {
	.mediaWrapper,
	.content {
		padding: 0 12px;
	}
}
</style>
