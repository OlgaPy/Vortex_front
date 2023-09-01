import { IPost } from '@/shared/stores/PostsStore';
import { IPostPreview as IPostPreviewExtends } from '@/entities/post';

export interface IPostPreview extends IPost, IPostPreviewExtends {}
