<template>
  <div class="flex-img">
    <div
      class="foto-hover"
      v-for="acomodacao in acomodacoes"
      :key="acomodacao.titulo"
    >
      <div class="foto-info" :data-id="acomodacao.id" @click="selecionarAcomodacao">
        <h5>{{ acomodacao.titulo }}</h5>
        <!-- <p>{{ acomodacao.descricao }}</p> -->
      </div>
      <img :src="`${acomodacao.src}`" alt="" />
    </div>
  </div>
</template>

<script>
import { acomodacoes } from "../helpers/AcomodacaoData";
import { Acomodacao } from "@/class/Acomodacao";
export default {
  name: "Acomodacao",
  data() {
    return {
      acomodacoes,
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
