<template>
  <div class="row">
    <div class="col-12">
      <Supporter />
    </div>
    <div class="col-12">
      {{msg}}
    </div>
    <div class="col-12">
      <Footer />
    </div>
  </div>
</template>

<script>
import Supporter from './Supporter.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: {
    Supporter,
    Footer
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
