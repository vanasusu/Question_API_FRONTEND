<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <router-link class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/">
          Question Bank
        </router-link>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-2">Create</span>
            </router-link>
          </li>
           <li class="nav-item">
            <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/search">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-2">Search</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/edit">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-2">Edit</span>
            </router-link>
          </li>
          <li class="nav-item">
<Dropdown />
            <!-- <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="#pablo">
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2"></span>
            </router-link> -->
          </li>
           
          

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
  name: "sky-navbar",
  data() {
    return {
      showMenu: false,
      user:{}
    }
  },
  components:{
    Dropdown
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  },
    computed: {
  isLoggedIn(){ return this.$localStorage.user}
}
,
mounted(){
   if (this.$localStorage.user) {
   this.user=JSON.parse(this.$localStorage.user)
  }
}
}
</script>