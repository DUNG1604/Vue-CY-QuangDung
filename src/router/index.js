import { createRouter, createWebHistory } from 'vue-router'
import Section1 from "../views/section-1/index.vue"
import Section2 from "../views/section-2/index.vue"
import Section3 from "@/views/section-3/index.vue"
import Ex1 from "../views/section-1/components/exercise1.vue"
import Ex2 from "../views/section-1/components/exercise2.vue"
import Ex3 from "../views/section-1/components/exercise3.vue"
import Ex4 from "../views/section-1/components/exercise4.vue"
import Ex5 from "../views/section-1/components/exercise5.vue"
import Ex6 from "../views/section-1/components/exercise6.vue"
import Ex7 from "../views/section-1/components/exercise7.vue"
import Ex2_1 from "@/views/section-2/components/exercise1.vue"
import Ex2_2 from "@/views/section-2/components/exercise2.vue"
import Ex3_1 from "@/views/section-3/components/exercise1.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/section1',
      name: 'section1',
      component: Section1,
      children:[
        {
          path: 'ex1',
          name: 'Ex-1',
          component: Ex1,
        },
        {
          path: 'ex2',
          name: 'Ex-2',
          component: Ex2,
        },
        {
          path: 'ex3',
          name: 'Ex-3',
          component: Ex3,
        },
        {
          path: 'ex4',
          name: 'Ex-4',
          component: Ex4,
        },
        {
          path: 'ex5',
          name: 'Ex-5',
          component: Ex5,
        },
        {
          path: 'ex6',
          name: 'Ex-6',
          component: Ex6,
        },
        {
          path: 'ex7',
          name: 'Ex-7',
          component: Ex7,
        },
      ]
    },
    {
      path: '/section2',
      name: 'section2',
      component: Section2,
      children:[
        {
          path: 'ex2.1',
          name: 'Ex-2.1',
          component: Ex2_1,
        },
        {
          path: 'ex2.2',
          name: 'Ex-2.2',
          component: Ex2_2,
        },
      ]
    },
    {
      path: '/section3',
      name: 'section3',
      component: Section3,
      children:[
        {
          path: 'ex3.1',
          name: 'Ex-3.1',
          component: Ex3_1,
        },
      ]
    },
  ]
})

export default router
