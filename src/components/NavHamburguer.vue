<template>
  <nav class="mobile-nav">
    <label class="menu-mobile-icon" for="menu-toggle">&#9776;</label>
    <input type="checkbox" id="menu-toggle" />
    <ul class="menu-mobile">
      <li>
        <a href="@/about.html">O Hotel</a>
      </li>
      <li>
        <a href="@/acomodacoes.html">Acomodações</a>
      </li>
      <li>
        <a href="@/reservas.html">Reservas</a>
      </li>
      <li>
        <a href="@/contato.html">Contato</a>
      </li>
      <li>
        <a href="@/login.html">Login</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  name: "NavHamburguer",
  components: { NavLink },
};
</script>

<style lang="scss">

</style>