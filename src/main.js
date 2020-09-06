import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Notify from './util/notify'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Notify)

Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    session:[],
  },
  mutations: {
    setSession (state,message) {
      state.session.push(message);
    },
  },
  getters: {
    getSession: state => {
      return state.session;
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
