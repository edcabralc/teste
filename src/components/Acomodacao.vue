<template>
  <div class="flex-img">
    <div
      class="foto-hover"
      v-for="acomodacao in acomodacoesData"
      :key="acomodacao.titulo">
      <div
        class="foto-info"
        :data-id="acomodacao.id"
        @click="selecionarAcomodacao">
        <h5>{{ acomodacao.titulo }}</h5>
        <!-- <p>{{ acomodacao.descricao }}</p> -->
      </div>
      <img :src="`${acomodacao.src}`" alt="" />
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { acomodacoesData } from "../helpers/AcomodacaoData";
import { Acomodacao } from "@/class/Acomodacao";
export default {
  name: "Acomodacao",
  data() {
    console.log(acomodacoesData.id);
    return {
      acomodacoesData,
    };
  },
  methods: {
    selecionarAcomodacao(e) {
      let acomoda = new Acomodacao();
      acomoda.getAcomodacao(e);
    },
  },
};
</script>

<style></style>
