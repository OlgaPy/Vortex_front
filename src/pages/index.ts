export const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('./HomePage.vue')
	},
	{
		path: '/all',
		name: 'all',
		component: () => import('./AllPage.vue')
	}
]
