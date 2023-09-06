import {defineStore} from 'pinia';
import { ref } from 'vue';
import * as api from '../../api/trends-posts-feed-api';
import type {IPost} from "@/entities/post";
import type {AddPostsAction, GetNextPostsAction} from "@/entities/posts-feed/model/posts-feed-store/types";

export const usePostsFeedStore = defineStore('postsStore', () => {
	const posts = ref<IPost[]>([]);

	const addPosts: AddPostsAction = (newPosts: IPost[]) => {
		posts.value = [...posts.value, ...newPosts];
	}

	//TODO fetch by pages, with cache
	const getNextPosts: GetNextPostsAction = async () => {
		if (posts.value.length === 0) {
			return await api.getPosts();
		}

		return posts.value;
	}

	return { posts, getNextPosts, addPosts };
});
