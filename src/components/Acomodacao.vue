<template>
    <div class="flex-img" >
        <div class="foto-hover" v-for="acomodacao in acomodacoes" :key="acomodacao.titulo">
            <div class="foto-info">
                <h5>{{acomodacao.titulo}}</h5>
                <p>{{ acomodacao.descricao }}</p>
            </div>
            <img :src="`${acomodacao.src}`" alt="" />
        </div>
    </div>
</template>

<script>
import {acomodacoes} from "../helpers/AcomodacaoData";
export default {
    name: "Acomodacao",
    data() {
        return {
            acomodacoes
        };
    },
};
</script>

<style></style>
