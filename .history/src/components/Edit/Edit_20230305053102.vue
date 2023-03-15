<template>
  <div>
    <Navbar />
    <EditcardVue :edit="edit" questions=[]></EditcardVue>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
import EditcardVue from "./Editcard.vue";
// import '../assets/loginsignup.css'
export default {
  name: "Edit",
  data() {
    return {
      edit: true,
    };
  },
  components: {
    Navbar,
    EditcardVue,
  },
  methods: {
    loginsubmit: function () {
      console.log(this.email);
    },
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
    var role = JSON.parse(this.$localStorage.user).role;
    if (role != "Teacher") {
      this.$router.replace("/search");
    }
  },
};
</script>

<style scoped>
/* @import '../assets/loginsignup.css'; */
</style>