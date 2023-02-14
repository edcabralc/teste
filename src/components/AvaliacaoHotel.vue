<template>
  <div>
    <h1>{{ titulo }}</h1>
    <h1>{{ descricao }}</h1>
    <img :src="`img/${imagem}`" alt="">
    <!-- <img src="../assets/images/acomodacoes/standard/5.jpg" alt=""> -->
  </div>
</template>

<script>
import { Acomodacao } from "@/assets/class/Acomodacao";
export default {
  name: "AvaliacaoHotel",
  data() {
    return {
      titulo: "",
      descricao: "",
      imagem: "",
    };
  },
  methods: {
    dadosAcomodacao() {
      let avalicaoHotel = new Acomodacao();
      let dados = avalicaoHotel.getLocalStorage();

      this.titulo = dados.titulo;
      this.descricao = dados.descricao;
      this.imagem = dados.imagem;
    },
  },
  mounted() {
    this.dadosAcomodacao();
  },
};
</script>

<style></style>
