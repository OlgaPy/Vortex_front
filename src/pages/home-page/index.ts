import {FeedTypes} from "@/entities/posts-feed/config/feed-types";

export const HOME_ROUTES = [
    {
        path: '/' + FeedTypes.TRENDS,
        alias: '/',
        name: 'Тренды',
        component: () => import('@/pages/home-page/HomePage.vue')
    },
    {
        path: '/' + FeedTypes.NEW,
        name: 'Новое',
        component: () => import('@/pages/home-page/HomePage.vue')
    },
    {
        path: '/' + FeedTypes.TOP,
        name: 'Топ',
        component: () => import('@/pages/home-page/HomePage.vue')
    },
    {
        path: '/' + FeedTypes.DISCUSSED,
        name: 'Обсуждаемое',
        component: () => import('@/pages/home-page/HomePage.vue')
    },
    {
        path: '/' + FeedTypes.SUBSCRIPTIONS,
        name: 'Подписки',
        component: () => import('@/pages/home-page/HomePage.vue')
    },
];
