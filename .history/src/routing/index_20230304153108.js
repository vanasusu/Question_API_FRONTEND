import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
  import Edit from '../components/Edit/Edit.vue'
  import Search from '../components/Search/Search.vue'
  import Search from '../components/Details/Details.vue'
  import Editquestion from '../components/Edit/Editquestion.vue'
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
    {
        path: '/edit',
        name: 'Edit',
        component: Edit
  
    
    },
    {
        path: '/edit/:id',
        name: 'Editquestion',
        component: Editquestion
  
    
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
  
    
    },
    {
        path: '/details',
        name: 'Details',
        component: Details
  
    
    }
]
  
// Create Vue Router Object
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router