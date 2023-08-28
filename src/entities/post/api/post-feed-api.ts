import { usePostsStore } from '@/shared/stores/PostsStore';
import { storeToRefs } from 'pinia';
import { POSTS_TO_LOAD, MAX_POSTS, MIN_POSTS_FETCH_DELAY, MAX_POSTS_FETCH_DELAY } from './consts';
import { getLoremPost, getRandomNumber } from './utils';
import type { IPost } from '@/shared/stores/PostsStore';

export const getPosts = (): Promise<IPost[]> => {
	const postsStore = usePostsStore();
	const { posts } = storeToRefs(postsStore);
	const randomDelay = getRandomNumber(MIN_POSTS_FETCH_DELAY, MAX_POSTS_FETCH_DELAY);

	return new Promise((res) => {
		const newPosts: IPost[] = [];

		for (let i = 0; i < POSTS_TO_LOAD; i++) {
			newPosts.push(getLoremPost());
		}

		setTimeout(() => {
			const postsLength = posts.value.length;

			res(postsLength > MAX_POSTS ? [] : newPosts);
		}, randomDelay);
	});
}
