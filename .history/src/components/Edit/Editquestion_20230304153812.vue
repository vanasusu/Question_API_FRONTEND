
  <template >
  <div>
    <Navbar />
    <div class="w-full max-w-xl mx-auto">
     
  </div>
</template>

<script>
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
      level: "",
    };
  },
  mounted: {},
};
</script>
