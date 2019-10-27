<template>
  <div class="row fotter">
    <div class="col-12">
      ...
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fotter {
    position: fixed;
    bottom: 0;
    z-index: 999;

    background: red;
    color: white;
    padding: 10px;
}
</style>
