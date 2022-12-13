import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlchemyViewView from '../views/AlchemyView.vue'
import MakeView from '../views/MakeView.vue'
import PackView from '../views/PackView.vue'
import SublimationView from '../views/SublimationView.vue'
import StartView from '../views/StartView.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/alchemy',
      name: 'alchemy',
      component: AlchemyViewView
    },
    {
      path: '/make',
      name: 'make',
      component: MakeView
    },
    {
      path: '/pack',
      name: 'pack',
      component: PackView
    },
    {
      path: '/sublimation',
      name: 'sublimation',
      component: SublimationView
    },
    {
      path: '/start',
      name: 'start',
      component: StartView
    },
    {
      path: '/:404(.*)*',
      name: '404',
      component: () => import("../views/404.vue")
    },

  ]
})

export default router
