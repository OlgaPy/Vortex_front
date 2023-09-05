import type {IPost} from "@/entities/post";

export interface PreviewPostProps {
	post: IPost;
	showProfile?: boolean | true;
	showFooter?: boolean | true;
}
