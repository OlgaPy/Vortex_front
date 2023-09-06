import {AddPostsAction, GetNextPostsAction, Posts} from "@/entities/posts-feed/model/posts-feed-store";

export type PostsFeedProps = {
	posts: Posts,
	getNextPosts: GetNextPostsAction,
	addPosts: AddPostsAction,
};
