<script setup lang="ts">
import PostsFeed from '@/entities/posts-feed/ui/PostsFeed.vue';
import ShowViewedPosts from '@/features/ShowViewedPosts.vue';
import MobileMainBlockUI from '@/shared/ui/block-ui/MobileMainBlockUI.vue';
import {PostPreviewActionsFeature} from "@/features/post-preview-actions-feature";
import PreviewPostUI from "@/entities/post/ui/PreviewPostUI.vue";
import ProfilePreviewUI from "@/entities/profile/ui/ProfilePreviewUI.vue";
import TagsList from "@/entities/tag/ui/TagsList.vue";
import {usePostsFeedStore} from "@/entities/posts-feed/model/posts-feed-store";

const postsStore = usePostsFeedStore();
const {addPosts, getNextPosts} = postsStore;
</script>

<template>
	<MobileMainBlockUI>
		<header :class="$style.header">
			<ShowViewedPosts :class="$style.showViewedPosts" />
		</header>
		<main :class="[$style.feed, 'color-bg-base-bg']">
			<PostsFeed :posts="postsStore.posts" :addPosts="addPosts" :getNextPosts="getNextPosts">
				<template #post="{post}">
					<PreviewPostUI :key="post.uuid" :post="post" :show-profile="true" :show-footer="true">
						<template #header>
							<ProfilePreviewUI>
								<template #subTitle="{ class: className }">
									<span :class="className">{{ post.created_at }}</span>
								</template>
							</ProfilePreviewUI>
						</template>

						<template #tags>
							<TagsList :tags="post.tags"/>
						</template>

						<template #footer>
							<PostPreviewActionsFeature :rating="post.rating"/>
						</template>
					</PreviewPostUI>
				</template>
			</PostsFeed>
		</main>
	</MobileMainBlockUI>
</template>

<style module lang="scss">
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

@media screen and (min-width: $screen-lg) {
	.showViewedPosts {
		padding: 4px 0;
	}
}
</style>
