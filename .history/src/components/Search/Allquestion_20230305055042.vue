<template>
  <div class="p-10">
    <!--Card 1-->
    <div class="flex flex-col items-center justify-center ">
      <div
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
          <router-link :to="'/details/' + question._id">    {{ question.user.username }}</router-link>
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
</template>

<script>
import moment from "moment";
// import '../assets/loginsignup.css'
export default {
  name: "Allquestion",
  props: ["questions"],
  data() {
    return {
      question: "",
      level: "",
      subject: "",
      showModal: false,
      questions: [],
    };
  },
  method: {
    togglemodal: function () {
      this.showModal = !this.showModal;
    },
  },
mounted(){
    console.log(this.questions)
}
};
</script>

<style scoped>
/* @import '../assets/loginsignup.css'; */
</style>