<template>
  <main>
    <hero-banner title="Confortável como um Abraço!" class="feedback-hero" />
    <div class="container-feedback">
      <div class="content-feedback">
        <div
          class="content-descricao"
          v-for="dados in acomodacao"
          :key="dados.id"
        >
          <div class="content-info">
            <div class="content-titulo">
              <img src="/img/quarto.73a5f20d.svg" alt="">
              <h1> {{ dados.titulo }}</h1>
            </div>
            <p>{{ dados.descricao }}</p>
          </div>
          <div class="content-imagem">
              <img :src="`${dados.src}`" alt="">
          </div>
        </div>
        <button class="btn-feedback">Reservar</button>
      </div>
    </div>
    <div class="content-form">
      <FormFeedback />
    </div>
  </main>
</template>

<script>
import HeroBanner from "@/components/commons/HeroBanner";
import FormFeedback from "@/components/FormFeedback";
import { Acomodacao } from "@/class/Acomodacao";
import { acomodacoes } from "@/helpers/AcomodacaoData";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "FeedbackView",
  data() {
    return {
      idImg: "",
      acomodacao: "",
    };
  },
  components: {
    HeroBanner,
    FormFeedback,
  },
  methods: {
    dadosAcomodacao() {
      let avalicaoHotel = new Acomodacao();
      let dados = avalicaoHotel.getLocalStorage();

      // this.titulo = dados.titulo;
      // this.descricao = dados.descricao;
      // this.imagem = dados.imagem;
      this.idImg = dados.idImg;
      // console.log(this.idImg);
      this.objAcomodacao(this.idImg);
    },
    objAcomodacao(idimg) {
      // console.log(acomodacoes.id == idimg);
      const ob = acomodacoes.filter((acomdacao) => acomdacao.id == idimg);
      // console.log(ob);
      this.acomodacao = ob;
    },
  },
  mutation: {},
  mounted() {
    this.dadosAcomodacao();
  },
};
</script>

<style src="./style.scss" lang="scss" />
