export const routes =  [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home-page/HomePage.vue')
    },
    {
        path: '/all',
        name: 'all',
        component: () => import('@/pages/all-page/AllPage.vue')
    }
]