import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateAccount from '../components/CreateAccount.vue'
import Login from '../components/MyLogin.vue'
import mainMenu from '../components/mainMenu.vue'
import Repeater from '../components/RepeaterGame.vue'
import Profile from '../components/Profile.vue'
import Achievements from '../components/Achievements.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/miniGames',
      name: 'miniGames',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MiniGameMenu.vue')
    },
    {
      path: '/createAccount',
      name: 'createAccount',
      component: CreateAccount
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/mainMenu',
      name: 'mainMenu',
      component: mainMenu
    },
    {
      path: '/repeater',
      name: 'repeater',
      component: Repeater
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: Achievements
    }
  ]
})

export default router
