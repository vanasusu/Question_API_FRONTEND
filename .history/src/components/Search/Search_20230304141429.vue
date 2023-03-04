<template>
  <div>
    <Navbar></Navbar>
    <div>
      <!-- <SearchInput v-model="searchVal" /> -->
    </div>
  </div>
</template>

<script>
// import '../assets/loginsignup.css'
import Navbar from "../Navbar.vue";
import { ref } from "vue";
import SearchInput from "vue-search-input";
// Optionally import default styling
import "vue-search-input/dist/styles.css";

const searchVal = ref("");
export default {
  name: "Search",
  data() {
    return {};
  },
  components: { Navbar, SearchInput },
 
  method: {},
};
</script>

