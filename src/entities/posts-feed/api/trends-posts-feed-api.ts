import {getLoremPost, getRandomNumber} from "../lib/get-lorem-post";
import {MIN_POSTS_FETCH_DELAY, MAX_POSTS_FETCH_DELAY, POSTS_TO_LOAD} from "../config";
import type {IPost} from "@/entities/post";

export const getPosts = (): Promise<IPost[]> => {
    const randomDelay = getRandomNumber(MIN_POSTS_FETCH_DELAY, MAX_POSTS_FETCH_DELAY);

    return new Promise((res) => {
        const newPosts: IPost[] = [];

        for (let i = 0; i < POSTS_TO_LOAD; i++) {
            newPosts.push(getLoremPost());
        }

        setTimeout(() => {
            res(newPosts);
        }, randomDelay);
    });
};
