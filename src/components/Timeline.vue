<template>
  <div>

    <div class="row" v-for="card in cards" v-bind:key="card.id">
      <div class="col-3 line">
        <img class="card rounded float-right" src="https://i.ibb.co/gdgVQwg/card-1.png">
      </div>
      <div class="col-9 card-description">
        <p class="text-left">
          <span class="number">
            <b>Number:</b> <b-badge variant="secondary">{{card.number}}</b-badge><br>
          </span>
          <b>Card Category:</b> {{card.category}}<br>
          <b>Status:</b> {{card.status}}<br>
          <b>Send:</b> {{card.send}}<br>
        </p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Timeline',
  data: function () {
    return {
      cards: {
        0:{
          number: 434233,
          category: 'Bronze',
          status: 'Active',
          send: '03/18/2019'
        },
        1:{
          number: 234001,
          category: 'Silver',
          status: 'Disabled',
          send: '03/01/2016'
        },
        2:{
          number: 123233,
          category: 'Gold',
          status: 'Disabled',
          send: '11/20/2012'
        },
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  border-right-style: dotted;
}
.card{
  width: 115px;
  margin-top: 20px;
  margin-right: -65px;
  margin-bottom: 20px;
  margin-left: 0px;
}
.card-description {
  display: flex;
  align-items: center;
}
.card-description p {
  margin-left: 39px;
  margin-bottom: 0px;
}
.number {
  font-size: 20px;
}
</style>
