import Vue from 'vue'
import App from './App.vue'
import router from './routing/index.js'
// import './assets/loginsignup.css'
import './assets/tailwind.css'
Vue.config.productionTip = false
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  duration: 3000,position:"top-right"
  
})

Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

