<template>
<div>
<Navbar />
 <EditcardVue :edit="edit" ></EditcardVue>
</div>
</template>

<script>
import Navbar from '../Navbar.vue'
import EditcardVue from './Editcard.vue'
// import '../assets/loginsignup.css'
export default {
 name: 'Edit',
 data(){
  return{
edit:true
  }
 },
 components:{
Navbar,EditcardVue
 },
 methods:{
    loginsubmit:function(){
      console.log(this.email)
    }
 }
}
</script>

<style scoped>
/* @import '../assets/loginsignup.css'; */
</style>