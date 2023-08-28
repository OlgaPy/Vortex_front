import type { IPost } from '@/shared/stores/PostsStore';
import { CUT_OFF_LOREM_MAX, CUT_OFF_LOREM_MIN, LOREM_TEXT, LOREM_TITLE } from './consts';

export const getRandomNumber = (min: number, max: number) => {
	return min + Math.floor(Math.random() * (max - min));
}

export const getLoremText = () => {
	const cutOfSymbols = getRandomNumber(CUT_OFF_LOREM_MIN, CUT_OFF_LOREM_MAX);
	return LOREM_TEXT.slice(0, cutOfSymbols);
};

export const getLoremTitle = () => {
	const randomWords = getRandomNumber(4, 7);
	return LOREM_TITLE.split(' ').slice(0, randomWords).join(' ');
}

export const getLoremTags = () => {
	const tagsCount = getRandomNumber(3, 6);
	return LOREM_TITLE.split(' ').slice(0, tagsCount);
}

export const getLoremPost = (): IPost => {
	return {
		title: getLoremTitle(),
		body: getLoremText(),
		tags: getLoremTags(),
		id: Date.now() + getRandomNumber(0, 1000),
	};
}
