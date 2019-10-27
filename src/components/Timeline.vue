<template>
  <div>

    <div class="row">
      <div class="col-3 line">
        <img class="card rounded float-right" src="https://www.greendot.com/for-people/our-products/prepaid-cards/prepaid-mastercard-or-visa-card/_jcr_content/root/responsivegrid/responsivegrid/product_detail_hero/hero_img--desktop.coreimg.png/1567537206489.png">
      </div>
      <div class="col-9 card-description">
        <p class="text-left">
          <b>Status:</b> Active<br>
          <b>Send:</b> 03/18/2019<br>
        </p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Timeline',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  border-right-style: dotted;
}
.card{
  width: 130px;
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
  margin-left: 50px;
}
</style>
