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
  isLoggedIn(){ return this.$localStorage.token}
},
mounted(){
  if (!this.$localStorage.token  && !this.$localStorage.user) {
    this.$router.replace('/login')
  }
},
}
</script>
