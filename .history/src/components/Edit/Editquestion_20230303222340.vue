
  <template >
     <div @click="!showModal" class="backdrop">
       <div class="modal">
            <div class="w-full max-w-xs">
  <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Question
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Subject
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    
     <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Subject
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
       </div>
   </div>
  </template>

<script>
    
  export default {
 name: 'Editquestion',
 props:['showmodal'],
 data(){
  return{
email:"",
password:""
  }
 },
 components:{
 },
 method:{
   closemodal:function(){
      this.$emit('close')
    }
 }
}
</script>

<style scoped>
.modal{
    width: 400px;
   padding: 20px;
   margin: 100px auto;
   background: white;
   border-radius: 10px;
}
.backdrop{
    position: fixed;
    top: 0;
    background: rgb(0,0,0,.5);
    width:100%;
    height: 100%;

}
.modal p{
    font-style: normal;
}

</style>