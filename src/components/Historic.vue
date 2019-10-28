<template>
  <div class="row">
    <div class="col-12">
      <Supporter />
    </div>
    <div class="col-12 clear">
      <div class="card" v-for="historic in historical" v-bind:key="historic.id">
        <blockquote class="blockquote text-left">
          <p class="mb-0">{{historic.text}}</p>
          <footer class="blockquote-footer">{{historic.author}} in <cite :title="historic.date">{{historic.date}}</cite></footer>
        </blockquote>    
      </div>
    </div>
  </div>
</template>

<script>
import Supporter from './Supporter.vue'

export default {
  name: 'Historic',
  components: {
    Supporter
  },
  data: function () {
    return {
      historical: [
        {
          text: 'Plan change.',
          author: 'Pedro Carlos',
          date: '12/31/2019 18:21'
        },
        {
          text: 'Consectetur adipiscing elit posuere erat a ante.',
          author: 'Silvana',
          date: '01/08/2017 11:00'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
          author: 'Mateus Silva',
          date: '01/02/2017 12:30'
        },
        {
          text: 'Integer posuere erat a ante.',
          author: 'Mateus Silva',
          date: '03/01/2016 08:30'
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-top: 5px;
  margin-right: 0px;
  margin-bottom: 5px;
  margin-left: 0px;
}
.blockquote {
  margin: 10px;
}
</style>
