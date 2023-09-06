import {v4 as uuid} from 'uuid';
import type {IPost} from '@/entities/posts-feed/model/posts-feed-store';
import {
    CUT_OFF_LOREM_MAX,
    CUT_OFF_LOREM_MIN,
    LOREM_TEXT,
    LOREM_TITLE,
    MAX_POST_RATING,
    MIN_POST_RATING
} from '../config';

export const getRandomNumber = (min: number, max: number) => {
    return min + Math.floor(Math.random() * (max - min));
};

export const getLoremText = () => {
    const cutOfSymbols = getRandomNumber(CUT_OFF_LOREM_MIN, CUT_OFF_LOREM_MAX);
    return LOREM_TEXT.slice(0, cutOfSymbols);
};

export const getLoremTitle = () => {
    const randomWords = getRandomNumber(4, 7);
    return LOREM_TITLE.split(' ').slice(0, randomWords).join(' ');
};

export const getLoremTags = () => {
    const tagsCount = getRandomNumber(3, 6);
    return LOREM_TITLE.split(' ').slice(0, tagsCount);
};

export const getLoremPost = (): IPost => {
    return {
        uuid: uuid(),
        title: getLoremTitle(),
        content: {
            0: {
                type: 'text',
                value: getLoremText()
            }
        },
        tags: getLoremTags(),
        rating: getRandomNumber(MIN_POST_RATING, MAX_POST_RATING)
    };
};
