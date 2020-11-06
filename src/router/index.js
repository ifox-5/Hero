import Vue from 'vue'
import VueRouter from 'vue-router'
// import First from'@/components/views/First'
import Login from'@/components/views/Login'
import Main from'@/components/views/Main'
import Users from'@/components/views/Users'
import homepage from'@/components/views/homepage'

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
    path: '/Main',
    name: 'Main',
    component:Main,
    children :[{
    path: '/Users',
    name: 'Users',
    component:Users
  }]},
{
  path: '/Main',
  name: 'lMain',
  component:Main,
  children :[
{
  path: '/homepage',
  name: 'homepage',
  component:homepage
}
  ]}
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
