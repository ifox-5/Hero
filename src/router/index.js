import Vue from 'vue'
import VueRouter from 'vue-router'
// import First from'@/components/views/First'
import Login from'@/components/views/Login'
import Main from'@/components/views/Main'
import Users from'@/components/views/Users'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',//重新定向到/login
    
  },
  {
    path: '/Login',
    name: 'Login',
    component:Login

  }, {
    path: '/main',
    name: 'Main',
    component:Main,
    children :[{
    path: '/Users',
    name: 'Users',
    component:Users
  }]
    
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
