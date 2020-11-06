import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from'@/components/views/homepage'
import Login from'@/components/views/Login'
import Users from'@/components/views/Users'
import layout from'@/components/views/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component:Login

  }, {
    path: '/',
    name: 'layout',
    component:layout,
    children :[{
    path: '/Users',
    name: 'Users',
    component:Users
  },{
    path: '/homepage',
    name: 'homepage',
    component:homepage

  }
]
    
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/first',
  //   name: 'First',
  //   component: First
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

  
]

const router = new VueRouter({
  routes
})

export default router
