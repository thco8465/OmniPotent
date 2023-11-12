import { createRouter, createWebHistory } from 'vue-router';
import MyLogin from './components/MyLogin.vue';
import CreateAccount from './components/CreateAccount.vue'
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
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
