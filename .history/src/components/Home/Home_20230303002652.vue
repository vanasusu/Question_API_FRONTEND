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
  }
}
</script>
