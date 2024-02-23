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
    {
      path: '/tweet/:id',
      name: 'tweet',
      component: () => import('@/pages/TweetPage.vue')
    },
  ]
})

export default router
