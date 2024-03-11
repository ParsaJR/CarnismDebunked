import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GeneralView from '../views/GeneralView.vue'
import HealthView from '../views/HealthView.vue'
import EnvView from '../views/EnvView.vue'

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
      path: '/health',
      name: 'Health',
      component: HealthView
    },
    {
      path: '/environment',
      name: 'Environment',
      component: EnvView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ]
})

export default router
