import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import CaesarPage from './pages/Caesar.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/caesar' },
    { path: '/caesar', component: CaesarPage },
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
