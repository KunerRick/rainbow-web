import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Notify from './util/notify'
// import Vuex from 'vuex'
import store from './util/vuexx'
import DB from './util/pouchdb'


Vue.use(Notify)
Vue.use(DB)

Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
