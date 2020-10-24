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
import XORPage from './pages/Xor.vue';
import DiffiePage from './pages/DiffieHellman.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueKonva)

const store = new Vuex.Store({
  state: {
    progress: '-1/0',
  },
  getters: {
    canAccess: (state) => (page, id) => {
      const progress = state.progress.split('/');
      if (+progress[0] === -1) return true;
      return page <= +progress[0] && id <= +progress[1];
    },
  },
  mutations: {
    updateProgress(state, newProgress) {
      state.progress = newProgress;
    },
  },
});

function initDatabase() {
  if (!firebase || !firebase.database) {
    return setTimeout(initDatabase, 200);
  }

  const database = firebase.database();
  database.ref('progress').on('value', snapshot => {
    store.commit('updateProgress', snapshot.val())
    console.log('Progress: ', snapshot.val());
  });
}
initDatabase();

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/caesar' },
    { path: '/caesar', component: CaesarPage },
    { path: '/vigenere', component: VigenerePage },
    { path: '/binary', component: BinaryPage },
    { path: '/xor', component: XORPage },
    { path: '/dh', component: DiffiePage }
  ],
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
