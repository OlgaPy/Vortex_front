import {HOME_ROUTES} from "@/pages/home-page";
import {PostPreviewPage} from '@/pages/post-preview';

export const routes = [
	...HOME_ROUTES,
	{
		path: '/all',
		name: 'Все компоненты',
		component: () => import('@/pages/all/AllPage.vue')
	},
	{
		path: '/post-editor',
		name: 'Создать пост',
		component: () => import('@/pages/post-editor/PostEditorPage.vue')
	},
	{
		path: '/auth',
		name: 'Авторизация',
		component: () => import('@/pages/auth/AuthPage.vue')
	},
	{
		path: '/post-published',
		name: 'Пост опубликован',
		component: () => import('@/pages/post-published/PostPublishedPage.vue')
	},
	{
		path: '/post-preview',
		name: 'Предпросмотр поста',
		component: PostPreviewPage
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'Не найдено',
		component: () => import('@/pages/not-found/NotFoundPage.vue')
	},
];
