<template>
  <div class="container fotter clear">
    <div class="row clear">
      <div class="col-12 clear">
        <b-button-group class="clear" size="lg">
          <b-button><i class="fas fa-user"></i> User</b-button>
          <b-button><i class="fas fa-list"></i> Historic</b-button>
          <b-button><i class="fas fa-search"></i> Search</b-button>
        </b-button-group>
      </div>
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
