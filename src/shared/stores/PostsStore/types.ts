interface IContentItem {
	type: 'text' | 'img' | 'video';
	value: string;
}

export interface IPost {
	uuid: string;
	title: string;
	content: Record<number, IContentItem>;
	tags: string[];
	rating: number;
}
