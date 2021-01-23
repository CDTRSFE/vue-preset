import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/Hello',
    name: 'Hello',
    component: () => import('@/components/normal/Hello.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
