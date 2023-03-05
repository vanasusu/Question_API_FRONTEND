<template>
<div>
  <Navbar />
  <Card />
</div>
</template>

<script>
import Navbar from '../Navbar.vue'
import  Card from '../Home/Card.vue'
export default {
  name: 'Home',
  components:{
     Navbar,Card
  },
    computed: {
  isLoggedIn(){ return this.$localStorage.user}
},

methods: {
    signup: function (e) {
      e.preventDefault();
      var data = {
        email: this.email,
        password: this.password,
        username: this.username,
        role: this.role,
      };
      createUser(data)
        .then((response) => {
          if (response.message) {
            this.$toasted.error(response.message);
          } else if (response.token) {
            var user={
              username:response.username,
              role:response.role
            }
            this.$localStorage.user=JSON.stringify(user)
            this.$localStorage.token = response.token; 
            this.$toasted.success("User registered successfully");
                this.email=""
          this.password=""
          this.username=""
          this.role=""
          window.location.reload()
          } else if (response.errors) {
            response.errors.map((error) => this.$toasted.error(error.msg));
          }
      
        })
        .catch((err) => console.log(err));
    },


mounted(){
  if ( !this.$localStorage.user) {
    this.$router.replace('/login')

  }
  var role=JSON.parse(this.$localStorage.user).role
  if(role!="Teacher"){
   this.$router.replace('/search') 
  }
},
}
</script>
