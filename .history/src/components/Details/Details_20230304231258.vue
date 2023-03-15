<template>
  <div>
    <Navbar />
     <div class="w-full max-w-2xl mx-auto my-4">
      <div class="shadow-xl border bg-white rounded px-8 pt-8 pb-8 mt-8">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="question"
          >
            Question
          </label>
          <p
            class=" appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="question"
          >ghghggggggggggggggg</p>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="subject"
          >
            Subject
          </label>
          <p
            class=" appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
          >vhghg</p>
        </div>

        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Difficulty
          </label>
          <p
            class=" rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mx-auto"
          >
            hjkjhb
          </p>
        </div>

      
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '../Navbar.vue' 

export default {
 name: 'Details',
 data(){
  return{
  }
 },
 components:{
    Navbar
 },
   computed: {
  isLoggedIn(){ return this.$localStorage.user}
},
mounted(){
  if (!this.$localStorage.token  && !this.$localStorage.user) {
    this.$router.replace('/login')
  }
},
}
</script>
