<template>
<div>
<Navbar />
 
</div>
</template>

<script>
import Navbar from '../Navbar.vue'
// import '../assets/loginsignup.css'
export default {
 name: 'Edit',
 data(){
  return{
email:"",
password:""
  }
 },
 components:{
Navbar
 },
 method:{
    loginsubmit:function(){
      console.log(this.email)
    }
 }
}
</script>

<style scoped>
/* @import '../assets/loginsignup.css'; */
</style>