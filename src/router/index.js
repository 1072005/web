import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Appdevelopment from '../views/Appdevelopment.vue'
import Facerecognition from '../views/Facerecognition.vue'
import Imagerecognition from '../views/Imagerecognition.vue'
import Systemintegration from '../views/Systemintegration.vue'
import Customizedrobot from '../views/Customizedrobot.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: Home,
  },
  {
    path: '/Appdevelopment',
    name: '/Appdevelopment',
    component: Appdevelopment,
  },
  {
    path: '/Facerecognition',
    name: '/Facerecognition',
    component: Facerecognition,
  },
  {
    path: '/Imagerecognition',
    name: '/Imagerecognition',
    component: Imagerecognition,
  },
  {
    path: '/Systemintegration',
    name: '/Systemintegration',
    component: Systemintegration,
  },
  {
    path: '/Customizedrobot',
    name: '/Customizedrobot',
    component: Customizedrobot,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior:'smooth',
      };
    }
  },


})

export default router
