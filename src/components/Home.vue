<template>
  <div class="row">
    <div class="col-12">
      <Supporter />
    </div>
    <div class="col-12">
      {{msg}}
    </div>
  </div>
</template>

<script>
import Supporter from './Supporter.vue'

export default {
  name: 'Home',
  components: {
    Supporter,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
