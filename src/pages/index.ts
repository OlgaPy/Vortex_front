export const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('./home-page/HomePage.vue')
	},
	{
		path: '/all',
		name: 'all',
		component: () => import('./AllPage.vue')
	},
	{
		path: '/post-editor',
		name: 'post-editor',
		component: () => import('./post-editor/PostEditorDesktopPage.vue')
	}
]
