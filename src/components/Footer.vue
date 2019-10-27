<template>
  <div class="row fotter clear">
    <div class="col-12 clear">
      <b-button-group class="clear" size="lg">
        <b-button>Left</b-button>
        <b-button>Middle</b-button>
        <b-button>Right</b-button>
      </b-button-group>
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
.clear {
  margin: 0px;
  padding: 0px;
  width: 100%;
}
.fotter {
    position: fixed;
    bottom: 0;
    z-index: 999;
    color: white;
}
</style>
