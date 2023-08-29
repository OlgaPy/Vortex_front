import { defineStore } from 'pinia'
import { ref } from 'vue'
import { initialPosts } from './consts'
import type { IPost } from './types'

export const usePostsStore = defineStore('postsStore', () => {
	const posts = ref<IPost[]>(initialPosts)

	function setPosts(newPosts: IPost[]) {
		posts.value = [...posts.value, ...newPosts]
	}

	return { posts, setPosts }
})
