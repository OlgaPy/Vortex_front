import type {IAuthor} from "@/entities/profile/model";

enum PostStatusEnum {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    DELETED = 'deleted',
}

export interface IContentItem {
    type: 'text' | 'img' | 'video';
    value: string | null;
}

export type PostContent = Record<number, IContentItem>;

export interface ICorePost {
    title: string;
    content: PostContent;
    tags: string[];
}

export interface IPost extends ICorePost {
    uuid: string;
    author: IAuthor;
    slug: string;
    post_group: number;
    community: number;
    views_count: number;
    comments_count: number;
    votes_up_count: number;
    votes_down_count: number;
    rating: number;
    status: PostStatusEnum;
    created_at: string;
    description: string;
}
