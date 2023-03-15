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
mounted(){
  if ( !this.$localStorage.user) {
    this.$router.replace('/login')

  }
  else if()
},
}
</script>
