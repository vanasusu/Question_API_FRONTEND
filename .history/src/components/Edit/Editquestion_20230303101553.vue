
  <template >
     <div class="backdrop">
       <div class="modal">

       </div>
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
.modal{
    width: 400px;

}
</style>