<template>
   <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="email" placeholder="Email" v-model="email"/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" v-model="password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
         
          </form>
        </div>
      </div>

      <div class="panels-container ">
        <div class="panel left-panel" style="display:flex;align-items:center">
          <div class="content">
            <h3>New here ?</h3>
            <p />

            <button @click="$router.replace({path:'/signup'})" class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="../assets/log.svg" class="image" alt="" />
        </div>
      </div>
    </div>
</template>

<script>
// import '../assets/loginsignup.css'
export default {
 name: 'Login',
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
@import '../assets/loginsignup.css';
</style>