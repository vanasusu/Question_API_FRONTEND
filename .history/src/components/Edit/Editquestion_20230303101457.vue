
  <template >
     <div class="backdrop">

   </div>
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
   closemodal:function(){
      this.$emit('close')
    }
 }
}
</script>

<style scoped>
/* @import '../assets/loginsignup.css'; */
</style>