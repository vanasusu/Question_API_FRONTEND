<template>
   <div class="container sign-up-mode">
      <div class="forms-container">
        <div class="signin-signup">
           <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" v-model="username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" v-model="email"/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" v-model="password"/>
            </div>
              <div class="input-field">
              <i class="fas fa-lock"></i>
              <select v-model="role">
                <option value="Tutor">Tutor</option>
                 <option value="Teacher">Teacher</option>
                  <option value="Student">Student</option>
              </select>
            </div>
            <input type="submit" class="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div class="panels-container ">
      <div class="panel left-panel"></div>
         <div class="panel right-panel " style="display:flex;align-items:center;">
          <div class="content">
            <router-link to="/login" style="font-weight: 600;line-height: 1;font-size: 1.5rem;color:white;">One of Us?</router-link>
           <p></p>
            <button @click=" $router.replace({path:'/login'})" class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="../assets/register.svg" class="image" alt="" />
        </div> 
      </div>
    </div>
</template>


<script>
import '../assets/loginsignup.css'

export default {
 name: 'Login',
  data(){
  return{
email:"",
password:"",
username:"",
role:"Tutor"
  }
 },
 method:{
   
   signupsubmit:function(){
    
   }
 }
}
</script> 

<style scoped>
@import '../assets/loginsignup.css';
</style>