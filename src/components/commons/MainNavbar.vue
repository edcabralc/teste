<template>
  <nav class="navbar">
    <ul class="menu">
      <NavLink />
      <li>
        <router-link to="/cadastrar" class="menu-btn menu-btn_signin">
          Cadastrar
        </router-link>
      </li>
      <li>
        <router-link to="/acessar" class="menu-btn menu-btn_login">
          Acessar
        </router-link>
      </li>
    </ul>
    <navmobile />
  </nav>
</template>

<script>
import NavLink from "./NavLink.vue";
import NavMobile from "./NavMobile.vue";

export default {
  name: "MainNavbar",
  components: { NavLink, NavMobile },
};
</script>

<style lang="scss">
@use "@/assets/scss/index" as *;
.navbar {
  font-size: 20px;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
}

.menu a:not(.menu-btn_signin):not(.menu-btn_login) {
  color: $titles-gray;
  padding: 28px 0;
  position: relative;
}

.menu a:not(.menu-btn_signin):not(.menu-btn_login):hover::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: $primary-gold;
  bottom: 0;
}

.menu-btn {
  width: 140px;
  height: auto;
  border-radius: 9px;
  border: none;
  font-size: 20px;
  padding: 12px 22px;
  text-align: center;
  transition: ease 0.2s;
  &_signin {
    border: 1px solid $primary-green;
    &:hover {
      background-color: $primary-green;
      color: #fff;
      filter: opacity(50%);
      cursor: pointer;
    }
  }
  &_login {
    background-color: $primary-green;
    color: #fff;
    &:hover {
      filter: opacity(50%);
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
