<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>teste de sass</p>
    <HelloWorld msg="Welcome to the JUNGLE" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    & p {
        background-color: red;
        color: white;
    }
}
</style>
