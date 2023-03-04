
  <template >

   
  </template>

<script>

export default {
 name: 'Editquestion',
 data(){
  return{
email:"",
password:""
  }
 },
 components:{
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