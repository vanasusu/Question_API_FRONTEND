<template>
  <div>
    <Navbar></Navbar>
    <div class="flex justify-center items-center flex-col">
      <div class="w-full md:w-1/2 mx-3 flex justify-end items-center relative">
        <input
        v-model="search"
          placeholder="Find your questions"
          class="border border-gray-400 rounded-lg p-2 w-full"
        />
        <img
          src="../../assets/search-icon.svg"
          class="absolute mr-2 w-5"
          alt="Search Icon"
        />
      </div>
      <div class="flex flex-col w-full" >
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
      search:"",
      edit: false,
    };
  },
  components: { Navbar, EditcardVue },

  mounted() {
    if (!this.$localStorage.user) {
      this.$router.replace("/login");
    }
  },
};
</script>

