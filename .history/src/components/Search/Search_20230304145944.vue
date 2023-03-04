<template>
  <div>
    <Navbar></Navbar>
    <div class="flex justify-center items-center">
     <div class="w-2/4 flex justify-end items-center relative">
    <input
       placeholder="Find your questions"
       class="border border-gray-400 rounded-lg p-2 w-full"
    />
    <img src="../../assets/search-icon.svg" class="absolute mr-2 w-5" alt="Search Icon" />
</div>
    </div>
  </div>
</template>

<script>
// import '../assets/loginsignup.css'
import Navbar from "../Navbar.vue";
import Editcard 
export default {
  name: "Search",
  data() {
    return {};
  },
  components: { Navbar },
 
  method: {},
};
</script>

