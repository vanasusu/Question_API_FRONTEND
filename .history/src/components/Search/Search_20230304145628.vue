<template>
  <div>
    <Navbar></Navbar>
    <div>
     <div class="w-1/3 flex justify-end items-center relative">
    <input
       placeholder="Pesquisar"
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
export default {
  name: "Search",
  data() {
    return {};
  },
  components: { Navbar },
 
  method: {},
};
</script>

