import { createRouter, createWebHistory } from 'vue-router';
import MyLogin from './components/MyLogin.vue';
import CreateAccount from './components/CreateAccount.vue'
import MainMenu from './components/MainMenu.vue'
const routes = [
  {
    path: '/',
    name: 'MyLogin',
    component: MyLogin,
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: CreateAccount
  },
  {
    path: '/MainMenu',
    name: 'MainMenu',
    component: MainMenu
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
