
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
   padding: 20px;
   margin: 100px auto;
   background: white;
   border-radius: 10px;
}

</style>