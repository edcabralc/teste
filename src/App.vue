<template>
  <router-view name="header"></router-view>
  <router-view name="mainpage"></router-view>
  <router-view name="footer"></router-view>
  <router-view name="login"></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@use "@/assets/scss/reset" as *;
@use "@/assets/scss/base" as *;
</style>
