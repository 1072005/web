import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Carousel3d from 'vue-carousel-3d';
import router from './router';
import 'typeface-roboto/index.css';
library.add(faFacebookF)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Carousel3d);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
