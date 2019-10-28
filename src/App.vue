<template>
  <div id="app" class="container">
    <div class="row justify-content-md-center">
      <div class="col-12">
        <router-view/>
      </div>
      <div class="col-12 clear div-footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style>
html, body{
  margin: 0px;
  padding: 0px;

  width: 100%;
  height: 100%;

  background-color: #ccc !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.box {
  border: 1px solid rgba(0, 0, 0, 0.125);
  background-color: #fff;
}

.clear {
  margin: 0px !important;
  padding: 0px !important;
}

.div-footer {
  height: 60px;
}
</style>
