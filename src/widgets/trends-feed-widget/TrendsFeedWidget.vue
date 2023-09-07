<script setup lang="ts">
import PostsFeed from '@/entities/posts-feed/ui/PostsFeed.vue';
import ShowViewedPosts from '@/features/ShowViewedPosts.vue';
import PostPreviewFooter from "@/widgets/trends-feed-widget/ui/PostPreviewFooter.vue";
import MobileMainBlockUI from '@/shared/ui/block-ui/MobileMainBlockUI.vue';
import PreviewPostUI from "@/entities/post/ui/PreviewPostUI.vue";
import ProfilePreviewUI from "@/entities/profile/ui/ProfilePreviewUI.vue";
import TagsList from "@/entities/tag/ui/TagsList.vue";
import {usePostsFeedStore} from "@/entities/posts-feed/model/posts-feed-store";
import {storeToRefs} from "pinia";

const postsStore = usePostsFeedStore();
const {addPosts, getNextPosts} = postsStore;
const {posts} = storeToRefs(postsStore);
</script>

<template>
	<MobileMainBlockUI :class="$style.container">
		<ShowViewedPosts :class="$style.showViewedPosts" />
		<PostsFeed :posts="posts" :addPosts="addPosts" :getNextPosts="getNextPosts">
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
						<PostPreviewFooter :rating="post.rating"/>
					</template>
				</PreviewPostUI>
			</template>
		</PostsFeed>
	</MobileMainBlockUI>
</template>

<style module lang="scss">
.container {
	padding-top: 32px;
	align-items: start;
	gap: 32px;
}

.header {
	display: flex;
	justify-content: start;
	width: 100%;
}

.showViewedPosts {
	padding: 0 12px;
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

@media screen and (max-width: $screen-md) {
	.container {
		padding-top: 12px;
		align-items: start;
		gap: 12px;
	}
}
</style>
