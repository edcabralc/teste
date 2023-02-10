<template>
    <div>
        <h1>Teste </h1>
        {{ acomodacoes() }}
    </div>
</template>

<script>
import acomodacao from "../helpers/AcomodacaoData.json";
export default {
    name: "Acomodacao",
    data() {
        return {
            dados: acomodacao,
        };
    },
    methods:{
        acomodacoes(){
            console.log(this.dados);
        }
    }
};
</script>

<style></style>
