<template>
<div>
<Navbar />
   <div class="p-10">
    <!--Card 1-->
    <div class=" flex-1 items-center justify-center  lg:flex">

      <div class="drop-shadow-xl hover:drop-shadow-2xl border border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b lg:rounded-t p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
          <p class="text-gray-700 text-base">Maths | Easy</p>
        </div>
        <div class="flex items-center justify-between">
          <!-- <div class="text-sm flex-1"> -->
            <p class="text-gray-900 leading-none">John Smith</p>
            <p class="text-gray-600">Aug 18</p>
          <!-- </div> -->
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