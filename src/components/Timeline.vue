<template>
  <div>

    <div class="row" v-for="card in cards" v-bind:key="card.id" v-on:click="clickCard(card)">
      <div class="col-3 line">
        <img class="card rounded float-right" v-bind:class="{'card-full': card.full}" src="https://i.ibb.co/gdgVQwg/card-1.png">
      </div>
      <div class="col-9 card-description">
        <p class="text-left" v-bind:class="{'card-description-full': card.full}">
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
      cards: [
        {
          full: false,
          number: 434233,
          category: 'Bronze',
          status: 'Active',
          send: '03/18/2019'
        },
        {
          full: false,
          number: 234001,
          category: 'Silver',
          status: 'Disabled',
          send: '03/01/2016'
        },
        {
          full: false,
          number: 123233,
          category: 'Gold',
          status: 'Disabled',
          send: '11/20/2012'
        },
      ]
    }
  },
  methods: {
    clickCard: function (el) {
      let status = el.full

      this.cards.forEach(cad => {
        cad.full = false
      });

      if (status != true) {
        el.full = true
      }
    }
  }

  //clickCard
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  border-right-style: dotted;
}
.card {
  width: 115px;
  margin-top: 20px;
  margin-right: -65px;
  margin-bottom: 20px;
  margin-left: 0px;

  transition: width 2s, margin-right 2s, transform 2s;
}
.card-full {
  width: 300px;
  margin-right: -250px;
  transform: rotate(360deg);
}
.card-description {
  display: flex;
  align-items: center;

  transition: opacity 1s, transform 1s;
}
.card-description-full {
  opacity: 0;
}
.card-description p {
  margin-left: 39px;
  margin-bottom: 0px;
}
.number {
  font-size: 20px;
}
</style>
