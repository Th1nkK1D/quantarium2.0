import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/index'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
