<template>
   <div class="container">
      
    </div>
</template>

<script>
// import '../assets/loginsignup.css'
export default {
 name: 'Edit',
 data(){
  return{
email:"",
password:""
  }
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