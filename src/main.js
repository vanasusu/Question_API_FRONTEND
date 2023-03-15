import Vue from 'vue'
import App from './App.vue'
import router from './routing/index.js'
import './assets/loginsignup.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
