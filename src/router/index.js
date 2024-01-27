import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GeneralView from '../views/GeneralView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/general',
      name: 'General',
      component: GeneralView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ]
})

export default router
