<template>

   <div class="p-10" >
    <!--Card 1-->
    <div class=" flex-1 items-center justify-center  lg:flex">

      <div class="drop-shadow-xl hover:drop-shadow-2xl border border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b lg:rounded-t p-4 flex flex-col justify-between leading-normal" style="width:60%;">
        <div class="mb-8">
        <div class="flex-row items-center justify-between " style="display:flex;align-items:center">
          <p class="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</p>
        <div class="text-gray-400 cursor-pointer" @click=" showModal=!showModal">Edit</div>
         </div>

          
          <!-- <p class="text-gray-700 text-base">Maths</p> -->
        </div>
        <div class="flex items-center justify-between">
          <!-- <div class="text-sm flex-1"> -->
        <div class="flex items-center justify-between">
            <p class="bg-cyan-300 px-4 py-2 rounded-full text-gray-900 leading-none">Maths</p>
             <p class="bg-cyan-300 px-4 py-2 rounded-full  text-gray-900 leading-none ml-3">Easy</p>
        </div> <p class="text-gray-600">Aug 18</p>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <!--Card 2-->
    <div v-if="showModal">
    <Editquestion showModal=showModal />
    </div>
  
</div>
</template>

<script>
import Editquestion from './Editquestion.vue'
// import '../assets/loginsignup.css'
export default {
 name: 'Editcard',
 components:{
    Editquestion
 },
 data(){
  return{
      question:"",
      level:"",
      subject:"",
      showModal:false
  }},
 method:{
   togglemodal:function(){
 this.showModal=!this.showModal
    }
 }
}
</script>

<style scoped>
/* @import '../assets/loginsignup.css'; */
</style>