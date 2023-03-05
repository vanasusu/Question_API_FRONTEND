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

Vue.prototype.$localStorage = new Vue({
    data: { 
       // token property returning the ls token value 
       token: window.localStorage.getItem('token') ,
       user: window.localStorage.getItem('user') 
    },
    watch:{ 
       // watcher listening for changes on the token property
       // to ensure the new value is written back to ls 
       token(value){ window.localStorage.setItem('token', value) } ,
       user(value){window.localStorage.setItem('user',value)},
       token(){window.localStorage.removeItem('token')},
       user(){window.localStorage.removeItem('user')}
    }
})

new Vue({
  
  router,
  render: h => h(App),
}).$mount('#app')

