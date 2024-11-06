import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'Home',
            component: ()=>import('@/views/Home.vue'),
        },
        {
            path: '/:id',
            name: 'Detail',
            component: ()=>import("@/views/components/Detail.vue")
        },
    ]
})

export default router
