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
import Profile from './components/Profile.vue';
import Subscription from './components/Subscription.vue';
import Payment from './components/Payment.vue';
import Reservation from './components/Reservation.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import Notification from './components/Notification.vue';
import CustomerReview from './components/CustomerReview.vue';



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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription,
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation,
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
  {
    path: '/notification',
    name: 'Notification',
    component: Notification,
  },
  {
    path: '/customerReview',
    name: 'CustomerReview',
    component: CustomerReview,
  }



 
  // Add other routes here for other components/pages
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
