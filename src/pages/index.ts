export const routes =  [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/all',
        name: 'all',
        component: () => import('@/pages/AllPage.vue')
    }
]