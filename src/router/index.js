import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GetStartedView from '../views/GetStartedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Get-Started',
      name: "Get-Started",
      component: GetStartedView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ]
})

export default router
