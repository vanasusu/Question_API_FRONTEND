<template>
  <div>
    <Navbar />
    <div class="w-full max-w-2xl mx-auto my-4">
      <div class="shadow-xl border bg-white rounded px-8 pt-8 pb-8 mt-8">
      
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="subject"
          >
            Subject
          </label>
          <p
            class="appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
          >
          {{subject}}
          </p>
        </div>
  <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Topic
          </label>
          <p
            class="rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mx-auto"
          >
            {{topic}}
          </p>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Difficulty
          </label>
          <p
            class="rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mx-auto"
          >
            {{level}}
          </p>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import { getquestion } from '@/services/question';
import Navbar from "../Navbar.vue";

export default {
  name: "Details",
  data() {
    return {
      question: "",
      subject: "",
      level: "",
      topic: "",
      questions: {},
    };
  },
  components: {
    Navbar,
  },
  computed: {
    isLoggedIn() {
      return this.$localStorage.user;
    },
  },
  mounted() {
    if (!this.$localStorage.user) {
      this.$router.replace("/login");
    }
    var id = this.$route.params.id;
    var token = this.$localStorage.token;
    getquestion(id, token)
      .then((response) => {
        if (response.error) {
          this.$toasted.error(response.error);
          this.$router.replace("/");
        } else if (response.questions) {
          this.questions = response.questions;
          this.question = this.questions.question;
          this.subject = this.questions.subject;
          this.level = this.questions.level;
          this.topic = this.questions.topic;
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>
