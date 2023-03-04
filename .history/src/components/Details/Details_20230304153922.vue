<template>
  <div>
    <Navbar />
     <div class="w-full max-w-xl mx-auto">
      <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="question"
          >
            Question
          </label>
          <input
            v-model="question"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="question"
            type="text"
            placeholder="Question"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="subject"
          >
            Subject
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
          />
        </div>

        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Difficulty
          </label>
          <select
            v-model="level"
            class="border shadow rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mx-auto"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div class="flex items-center justify-end" style="margin-top:4rem;">
          <button
            class="bg-blue-500 hover:bg-blue-700 mx-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Update
          </button>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Delete
          </button>
        </div>
      </form>
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
 method:{
 }
}
</script>
