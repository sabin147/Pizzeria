// router.js
import { createRouter, createWebHistory } from 'vue-router';
import FoodItem from './components/FoodItem.vue';
import Customer from './components/Customer.vue';
import Order from './components/Order.vue';
import HomePage from './components/HomePage.vue';
import Basket from './components/Basket.vue';
import SignUp from './components/SignUp.vue';
import Home from './components/Home.vue';
import ContactUs from './components/ContactUs.vue';


const routes = [
  {
    path: '/fooditem',
    name: 'FoodItem',
    component: FoodItem,
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: ContactUs,
  }


 
  // Add other routes here for other components/pages
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
