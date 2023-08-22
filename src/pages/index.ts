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
	}
]
