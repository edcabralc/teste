<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
=======
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
>>>>>>> e0fba4731ee9442babaeec08816ccec55eac823e
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
<<<<<<< HEAD
  margin-top: 60px;
=======
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      // color: #42b983;
      color: red;
    }
  }
>>>>>>> e0fba4731ee9442babaeec08816ccec55eac823e
}
=======
    <router-view />
</template>

<style lang="scss">
@use "@/assets/scss/reset" as *;
@use "@/assets/scss/base" as *;
>>>>>>> da88480a3d17c4234cb0c976fc92c5affabd795e
</style>
