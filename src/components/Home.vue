<template>
  <div class="row">
    <div class="col-12">
      <Supporter />
    </div>
    <div class="col-12">
      <Timeline />
    </div>
  </div>
</template>

<script>
import Supporter from './Supporter.vue'
import Timeline from './Timeline.vue'

export default {
  name: 'Home',
  components: {
    Supporter,
    Timeline
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
