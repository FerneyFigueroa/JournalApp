import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import daybook from '../modules/daybook/router/index'
import authRouter from '../modules/auth/routes'
import isAuthenticateGuard from '@/modules/auth/routes/auth-guard'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/daybook',
    beforeEnter:[isAuthenticateGuard],
    ...daybook
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
