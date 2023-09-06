import type {IPost} from "@/entities/post";

export type Posts = IPost[];
export type AddPostsAction = (newPosts: Posts) => void;
export type GetNextPostsAction = () => Promise<IPost[]>;
