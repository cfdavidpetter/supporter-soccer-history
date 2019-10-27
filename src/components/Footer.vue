<template>
  <div class="container fotter clear">
    <div class="row clear">
      <div class="col-12 clear">
        <b-button-group class="clear" size="lg">
          <b-button :pressed="pgNow == 'user'" v-on:click="pag('user')"><i class="fas fa-user"></i><small class="d-none d-md-block">User</small></b-button>
          <b-button :pressed="pgNow == 'historic'" v-on:click="pag('historic')"><i class="fas fa-list"></i><small class="d-none d-md-block">Historic</small></b-button>
          <b-button :pressed="pgNow == 'search'" v-on:click="pag('search')"><i class="fas fa-search"></i><small class="d-none d-md-block">Search</small></b-button>
        </b-button-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: function () {
    return {
      pgNow: 'user'
    }
  },
  methods: {
    pag: function (el) {
      this.pgNow = el
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clear {
  width: 100%;
}
.fotter {
    position: fixed;
    bottom: 0;
    z-index: 999;
    color: white;
}
</style>
