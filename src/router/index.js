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
      component: HomeView,
      meta:{
        breadcrumb: [
          {name: 'خانه'} 
        ],
        title: "خانه",
      }
    },
    {
      path: '/general',
      name: 'General',
      component: GeneralView,
      meta:{
        breadcrumb: [
          {name: 'عمومی / اخلاقی'}
        ],
        title: "عمومی"
     }
    },
    {
      path: '/health',
      name: 'Health',
      component: HealthView,
      meta:{
        breadcrumb: [
          {name: 'سلامتی'}
        ],
        title: "سلامتی"
      }
    },
    {
      path: '/environment',
      name: 'Environment',
      component: EnvView,
      meta:{
        breadcrumb: [
          {name: 'محیط زیست'}
        ],
        title: "محیط زیست"
      }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta:{
        title: "درباره ما"
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})
router.beforeEach((to) => {
  document.title = to.meta?.title ?? "CarnismDebunked"
  const description = "سوالات متداول پیرامون گیاه خواری";
  document.querySelector('head meta[name="description"]').setAttribute('content',description)
})

export default router
