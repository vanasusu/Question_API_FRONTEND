
  <template >
     <div class="backdrop">
       <div class="modal" @click.stop="">
            <div class="w-full max-w-xs">
  <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="question">
        Question
      </label>
      <input v-model="question" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="question" type="text" placeholder="Question">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="subject">
        Subject
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" >
    </div>

     <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Difficulty
      </label>
     <select v-model="level" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest  mx-auto">
       <option value="Easy">Easy</option>
          <option value="Medium" >Medium</option>
           <option value="Hard">Hard</option>
      </select>
    </div>

    <div class="flex items-center justify-between">
      <button  class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Cancel
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Update
      </button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Delete
      </button>
    </div>
  </form>
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
question:"",
subject:"",
level:""
  }
 },
 method:{

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