
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
.backdrop{
    position: fixed;
    top: 0;
    background: rgb(0,0,0,.5);
    width:100%;
    height: 100%;

}
.modal p{
    font-style: normal;
}
</style>