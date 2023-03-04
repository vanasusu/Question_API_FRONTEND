<template>
<div>
<Navbar />
   <div class="p-10">
    <!--Card 1-->
    <div class=" w-full d-flex align-items-center justify-content-center lg:max-w-full lg:flex">

      <div class=" border border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="/ben.png" alt="Avatar of Writer">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">John Smith</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
    <!--Card 2-->
    
   
  </div>
</div>
</template>

<script>
import Navbar from '../Navbar.vue'
// import '../assets/loginsignup.css'
export default {
 name: 'Edit',
 data(){
  return{
email:"",
password:""
  }
 },
 components:{
Navbar
 },
 method:{
    loginsubmit:function(){
      console.log(this.email)
    }
 }
}
</script>

<style scoped>
/* @import '../assets/loginsignup.css'; */
</style>