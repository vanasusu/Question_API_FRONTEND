import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
  
Vue.use(VueRouter)
  
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
  
    
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
  
    
    },
]
  
// Create Vue Router Object
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router