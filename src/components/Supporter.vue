<template>
    <div class="row box">
        <div class="back" style="background-image: url('https://upload.wikimedia.org/wikipedia/pt/9/97/Tabajara_Futebol_Clube.png')"></div>
        <div class="col-md-auto">
            <div class="div-img-supp">
                <b-img class="img-supp" v-bind="mainProps" src="https://img.olhardigital.com.br/uploads/acervo_imagens/2014/12/r16x9/20141204130826_1200_675_-_perfil_facebook.jpg" rounded="circle" style="box-shadow: 0 0 4px 6px #bba929;"></b-img>
            </div>
        </div>
        <div class="col description">
            <span class="d-none d-md-block padd-top"></span>
            <p class="text-left h3">Pedro Juliano Silva</p>
            <p class="text-left ">
               <i class="far fa-address-card"></i>&nbsp;<b>Category:</b> Bronze <br>
               <i class="fas fa-medal"></i>&nbsp;<b>Status:</b> Active
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Supporter',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    display: block;
    background-repeat: no-repeat;
    background-position-x: 120%;
    background-position-y: -25px;
    content: "";
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
}

.supporter {
    margin-top: 10px;
}

@keyframes itens-opacity {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes itens-top {
    0% { margin-top: -250px; }
    100% { margin-top: 20px; }
}

.div-img-supp {
    min-height: 165px;
}

.img-supp {
    position: relative;
    margin: 20px;
    width: 125px;
    height: 125px;
    object-fit: cover;
    object-position: center;

    animation: itens-top 1.5s ease-in-out;
}

.padd-top {
    height: 24px;
}

.description {
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 0px;
    padding-left: 20px;

    animation: itens-opacity 3s ease-in-out;
}
</style>
