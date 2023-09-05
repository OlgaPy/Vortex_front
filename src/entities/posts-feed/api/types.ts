import type {IPost} from "@/entities/post";

export interface IPostsResponse {
	count: number;
	next: string;
	previous: string;
	results: IPost[];
}
