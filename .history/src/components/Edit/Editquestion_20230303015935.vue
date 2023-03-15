<t-modal header="Title of the modal"
>
  Content of the modal.
  <template v-slot:footer>
    <div class="flex justify-between">
      <t-button type="button">
        Cancel
      </t-button>
      <t-button type="button">
        Ok
      </t-button>
    </div>
  </template>
</t-modal>

<script>
// import '../assets/loginsignup.css'
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