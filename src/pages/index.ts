export const routes = [
	{
		path: '/',
		name: 'Тренды',
		component: () => import('./home-page/HomePage.vue')
	},
	{
		path: '/all',
		name: 'Все компоненты',
		component: () => import('@/pages/all/AllPage.vue')
	},
	{
		path: '/post-editor',
		name: 'Создать пост',
		component: () => import('./post-editor/PostEditorPage.vue')
	}
]
