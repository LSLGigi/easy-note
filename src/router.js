import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Add from './components/Add.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      //Home的子路由List和User
      children:[
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ './components/List.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './components/User.vue')
        },
      ]
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue'),
    },*/
  ],
});

