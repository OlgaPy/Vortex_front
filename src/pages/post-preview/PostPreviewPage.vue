<script setup lang="ts">
import { storeToRefs } from 'pinia';
import PostPreviewHeader from '@/pages/post-preview/ui/PostPreviewHeader.vue';
import PostPreviewFooter from '@/pages/post-preview/ui/PostPreviewFooter.vue';
import PageLayout from '@/widgets/page-layout/PageLayout.vue';
import TestPreviewPost from '@/widgets/trends-feed-widget/ui/TestPreviewPost.vue';
import { IPost, usePostsStore } from '@/shared/stores/PostsStore';

// temp content
const postsStore = usePostsStore();
const { posts } = storeToRefs(postsStore);
const previewPost = posts.value[2] as IPost;
const { title, content, uuid, tags, rating } = previewPost;
</script>

<template>
	<PageLayout>
		<template #prevPageTitle>Предпросмотр поста</template>
		<template #content>
			<PostPreviewHeader />
			<TestPreviewPost
				:title="title"
				:content="content"
				:tags="tags"
				:rating="rating"
				:uuid="uuid"
			/>
			<PostPreviewFooter />
		</template>
	</PageLayout>
</template>
