import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Appdevelopment from '../views/Appdevelopment.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component:Home,
  },
  {
    path:'/Appdevelopment',
    name:'/Appdevelopment',
    component:Appdevelopment,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
