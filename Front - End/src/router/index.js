import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/clientes',
    name: 'Clientes',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Clientes.vue')
  },

  {
    path: '/pedidos',
    name: 'Pedidos',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedidos.vue')
  },

  {
    path: '/menus',
    name: 'Menus',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Menus.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
