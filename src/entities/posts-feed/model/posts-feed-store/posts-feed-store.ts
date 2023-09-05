import { defineStore } from 'pinia';
import { ref } from 'vue';
import * as api from '../../api/trends-posts-feed-api';
import type {IPost} from "@/entities/post";

export const usePostsFeedStore = defineStore('postsStore', () => {
	const posts = ref<IPost[]>([]);

	function addPosts(newPosts: IPost[]) {
		posts.value = [...posts.value, ...newPosts];
	}

	//TODO fetch by pages, with cache
	async function getNextPosts() {
		if (posts.value.length === 0) {
			return await api.getPosts();
		}

		return posts.value;
	}

	return { posts, getNextPosts, addPosts };
});
