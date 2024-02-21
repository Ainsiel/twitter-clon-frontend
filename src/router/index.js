import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/RegisterPage.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: () => import('@/pages/ProfilePage.vue')
    },
    {
      path: '/follows/:username/:type',
      name: 'follows',
      component: () => import('@/pages/FollowsPage.vue')
    },
  ]
})

export default router
