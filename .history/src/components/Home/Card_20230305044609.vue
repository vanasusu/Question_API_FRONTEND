<template>
  <div
    class="w-1/2 mx-auto  col-span-1 lg:col-span-6"
    style="margin-top: 2.5rem"
  >
    <div class="p-10 rounded-md drop-shadow-2xl bg-white">
      <h4 class="text-3xl text-gray-700 mb-5 text-center">Add Question</h4>
      <div class="mb-6">
        <label class="block mb-3 text-gray-600" for="">Subject</label>
        <input
          v-model="subject"
          type="text"
          class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
        />

      </div>
       <div class="mb-6">
        <label class="block mb-3 text-gray-600" for="">Topic</label>
        <input
          v-model="topic"
          type="text"
          class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
        />
        
      </div>
      <div class="mb-6">
        <label class="block mb-3 text-gray-600" for="">Difficulty Level</label>
        <div class="flex">
          <select
            v-model="level"
            class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mx-auto"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>
      <div class="mb-6">
        <label class="block mb-3 text-gray-600" for="">Question</label>
        <textarea
          v-model="question"
          type="text"
          class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
        />
      </div>

      <div>
        <button
          @click="finish"
          class="w-full text-ceenter px-4 py-3 bg-blue-500 rounded-md shadow-md text-white font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {postquestion} from '../../services/question'
export default {
  name: "HomeCard",
  data() {
    return {
      question: "",
      level: "",
      subject: "",
      topic:""
    };
  },
 methods: {
      finish: function (e) {
      e.preventDefault();
      var token=this.$localStorage.token
      var data = {
        question: this.question,
        level: this.level,
        subject: this.subject,
        topic: this.topic,
      };
      postquestion(data,token)
        .then((response) => {
          if (response.error) {
            this.$toasted.error(response.error);
          } else if (response.message) {
            this.$toasted.success(response.message);
                this.question=""
          this.level=""
          this.subject=""
          this.topic=""
          } else if (response.errors) {
            response.errors.map((error) => this.$toasted.error(error.msg));
          }
      
        })
        .catch((err) => console.log(err));
    },
},
};
</script>