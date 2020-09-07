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
    user:null,
    userProperty:null,
    receiver:null,
    token:null,
  },
  mutations: {
    setSession (state,message) {
      state.session.push(message);
    },
    setUser(state,user){
      state.user = user;
    },
    setReceiver(state,receiver){
      state.receiver = receiver;
    },
    setUserProperty(state,userProperty){
      state.userProperty = userProperty;
    },
    setToken(state,token){
      state.token = token;
    },
  },
  getters: {
    getToken: state => {
      return state.token;
    },
    getSession: state => {
      return state.session;
    },
    getUser: state => {
      return state.user;
    },
    getUserPropery: state => {
      return state.userProperty;
    },
    getReceivert: state => {
      return state.receiver;
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
