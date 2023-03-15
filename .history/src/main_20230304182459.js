import Vue from 'vue'
import App from './App.vue'
import router from './routing/index.js'
// import './assets/loginsignup.css'
import './assets/tailwind.css'
Vue.config.productionTip = false
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  duration: 1500,position:"top-right"
  
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
