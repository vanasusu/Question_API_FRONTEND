
  <template >
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
            for="topic"
          >
            Subject
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="topic"
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
import { getquestion } from '@/services/question';
import Navbar from '../Navbar.vue'
export default {
  name: "Editquestion",
  props: ["showmodal"],
  components:{
        Navbar
  },
  data() {
    return {
      question: "",
      subject: "",
      level: "", topic: "",
      questions:{}
    };
  },
 mounted(){
  if ( !this.$localStorage.user) {
    this.$router.replace('/login')
  }
  var role=JSON.parse(this.$localStorage.user).role
  if(role!="Teacher"){
   this.$router.replace('/search') 
  }
  var id=JSON.parse(this.$localStorage.user).id
    var token=this.$localStorage.token
      getquestion(id,token)
        .then((response) => {
          if (response.error) {
            this.$toasted.error(response.error);
          } else if (response.questions) {
  this.questions= response.questions
  this.question=this.questions.question
  this.subject=this.questions.subject
  this.level=this.questions.level
  this.topic=this.questions.topic
          } 
        })
        .catch((err) => console.log(err));
},
};
</script>
