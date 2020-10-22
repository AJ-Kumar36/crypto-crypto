import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueKonva from 'vue-konva';

import App from './App.vue'
import CaesarPage from './pages/Caesar.vue';
import VigenerePage from './pages/Vigenere.vue';
import BinaryPage from './pages/Binary.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueKonva)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/caesar' },
    { path: '/caesar', component: CaesarPage },
    { path: '/vigenere', component: VigenerePage },
    { path: '/binary', component: BinaryPage },
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
