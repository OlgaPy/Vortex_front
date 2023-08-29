import type { IPost as IStorePost } from '@/shared/stores/PostsStore'

enum EStatus {
	DRAFT = 'draft',
}

interface IAuthor {
	username: string
	avatar: string
}

export interface IPost extends IStorePost {
	author: IAuthor
	slug: string
	post_group: number
	community: number
	views_count: number
	comments_count: number
	votes_up_count: number
	votes_down_count: number
	rating: number
	status: EStatus
	created_at: string
}

export interface IPostsResponse {
	count: number
	next: string
	previous: string
	results: IPost[]
}
