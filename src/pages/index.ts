export const routes =  [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/all',
        name: 'all',
        component: () => import('@/pages/All.vue')
    }
]