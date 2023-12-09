import { createRouter, createWebHistory } from 'vue-router'
import CreateAccount from '../components/CreateAccount.vue'
import Login from '../components/MyLogin.vue'
import Repeater from '../components/RepeaterGame.vue'
import Profile from '../components/Profile/Profile.vue'
import Achievements from '../components/Achievements/Achievements.vue'
import ShapeClicker from '../components/shapeClicker/ShapeClicker.vue'
import Scramble from '../components/Scramble/viewModel.vue'
import Board from '../components/tileGame/gameBoard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes: [
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
    },
    {
      path: '/scramble',
      name: 'scramble',
      component: Scramble
    },
    {
      path: '/shapeClicker',
      name: 'shapeClicker',
      component: ShapeClicker
    },
    {
      path: '/tileGame',
      name: 'tileGame',
      component: Board
    }
  ]
})

export default router
