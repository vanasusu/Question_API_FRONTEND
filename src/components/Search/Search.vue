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
      <div class="flex justify-start mt-4">
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            v-model="subject"
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
        <label class="relative mx-4 inline-flex items-center cursor-pointer">
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
            class="border shadow rounded-md inline-block px-3 w-full text-gray-600 tracking-widest mx-auto"
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
        <div class="p-10">
    <!--Card 1-->
    <div class="flex flex-col items-center justify-center ">
      <div class="mt-4 text-xl" v-show="!loading && questions.length==0">No questions found</div>
      <div
      v-show="questions && questions.length > 0"
        class="w-full md:w-1/2 lg:w-1/2 drop-shadow-xl mb-4 hover:drop-shadow-2xl border border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b lg:rounded-t p-4 flex flex-col justify-between leading-normal"
        v-for="question in questions"
        :key="question._id"
      >
        <div class="mb-8">
          <div
            class="flex-row items-center justify-between"
            style="display: flex; align-items: center"
          >
            <p class="text-gray-900 font-bold text-xl mb-2">
              {{ question.question }}
            </p>

            <div class="text-gray-600 cursor-pointer" >
          <router-link :to="'/details/' + question._id">    {{  question?.user?.username }}</router-link>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-between">
            <p
              class="bg-cyan-300 px-4 py-2 rounded-full text-gray-900 leading-none"
            >
              {{ question.subject }}
            </p>
            <p
              class="bg-cyan-300 px-4 py-2 mx-3 rounded-full text-gray-900 leading-none"
            >
              {{ question.topic }}
            </p>
            <p
              class="bg-cyan-300 px-4 py-2 rounded-full text-gray-900 leading-none"
            >
              {{ question.level }}
            </p>
          </div>
          <p class="text-gray-600">
            {{ moment(question.createdAt).fromNow() }}
          </p>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { allquestion, searchquestion } from "@/services/question";

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
      questions: [],
      search: "",
      edit: false,
      loading:false
    };
  },
  components: { Navbar },
  methods: {
    submit: function (e) {
      e.preventDefault();
      var token = this.$localStorage.token;
      var url = "";
      if (this.search != "") {
        if (this.topic) {
          url = url + "topic=" + this.search + "&";
        }
        if (this.subject) {
          url = url + "subject=" + this.search+ "&";
        }
        if (this.question) {
          url = url + "question=" + this.search + "&";
        }
        
      }
      url = url + "level=" + this.level;
      console.log(url)
      searchquestion(url, token)
        .then((response) => {
          if (response.error) {
            this.$toasted.error(response.error);
            this.$router.replace("/");
          } else if (response.questions) {
            console.log(response)
            this.questions = response.questions;
            console.log(url,this.questions)
          }
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    if (!this.$localStorage.user) {
      this.$router.replace("/login");
    }
    var token = this.$localStorage.token;
    this.loading=true
allquestion(token)
      .then((response) => {
        if (response.error) {
          this.$toasted.error(response.error);
          this.$router.replace("/");
        } else if (response.questions) {
          console.log(response);
          this.questions = response.questions;
          console.log(this.questions)
        }
        this.loading=true
      })
      .catch((err) => console.log(err));
  
  }


      }
</script>

