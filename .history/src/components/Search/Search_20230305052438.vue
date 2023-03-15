<template>
  <div>
    <Navbar></Navbar>
    <div class="flex justify-center mx-3 items-center flex-col">
      <div class="w-full md:w-1/2 flex justify-end items-center relative">
        <input
          v-model="search"
          placeholder="Find your questions"
          class="border border-gray-400 rounded-lg p-2 w-full"
        />
        <img
          v-on:click="submit"
          src="../../assets/search-icon.svg"
          class="absolute mr-2 w-5 cursor-pointer"
          alt="Search Icon"
        />
      </div>
      <div class="flex justify-start mt-4 ">
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            v-model="topic"
            type="checkbox"
            value=""
            class="sr-only peer"
          />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <span
            class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Subject</span
          >
        </label>
        <label class="relative mx-4  inline-flex items-center cursor-pointer">
          <input
            v-model="topic"
            type="checkbox"
            value=""
            class="sr-only peer"
          />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <span
            class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Topic</span
          >
        </label>
        
     <div class="">
          <select
            v-model="level"
          
            class="border shadow rounded-md inline-block  px-3 w-full text-gray-600 tracking-widest mx-auto"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <label class="relative mx-4 inline-flex items-center cursor-pointer">
          <input
            v-model="question"
            type="checkbox"
            value=""
            class="sr-only peer"
          />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <span
            class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Question</span
          >
        </label>
      </div>
      <div class="flex flex-col w-full">
        <EditcardVue :edit="edit" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import EditcardVue from "../Edit/Editcard.vue";
// import '../assets/loginsignup.css'
import Navbar from "../Navbar.vue";
export default {
  name: "Search",
  data() {
    return {
      topic: false,
      subject: false,
      level: "Easy",
      question: false,
      search: "",
      edit: false,
    };
  },
  components: { Navbar, EditcardVue },
  methods: {
    submit: function (e) {
      e.preventDefault();
       var token = this.$localStorage.token;
       var url;
       if (th) {
        
       }
       
    },
  },
  mounted() {
    if (!this.$localStorage.user) {
      this.$router.replace("/login");
    }
  },
};
</script>

