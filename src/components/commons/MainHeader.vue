<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo.svg" alt="Chloe Gran Hotel" />
        </router-link>
      </div>
      <MainNavbar />
    </div>
  </header>
</template>

<script>
import MainNavbar from "@/components/commons/MainNavbar.vue";
export default {
  name: "MainHeader",
  components: { MainNavbar },
};
</script>

<style lang="scss" scoped>
/* Header */
.header {
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 68px 0px;
  margin: 0 32px;
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    flex-wrap: wrap;
  }
}

/* Navbar */
.logo {
  width: 217px;
}

/* end Header */
</style>
