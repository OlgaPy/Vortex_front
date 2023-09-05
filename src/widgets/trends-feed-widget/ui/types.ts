import type {IPost} from '@/entities/post';

export type PreviewPostProps = {
    post: IPost,
    showFooter: boolean | true,
    showProfile: boolean | true,
};

export type PostPreviewFooterProps = {
    rating: string
}
