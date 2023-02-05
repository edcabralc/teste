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
        <nav class="mobile-nav">
            <label class="menu-mobile-icon" for="menu-toggle">&#9776;</label>
            <input type="checkbox" id="menu-toggle" />
            <ul class="menu-mobile">
                <NavLink />
                <li>
                    <router-link to="/acessar">Login</router-link>
                </li>
            </ul>
        </nav>
    </nav>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
    name: "MainNavbar",
    components: {NavLink},
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

.mobile-nav {
    display: none;
}

.menu-mobile {
    display: none;
    position: absolute;
    top: 120px;
    right: 0px;
    width: 100%;
    height: 100vh;
    padding: 24px;
    background-color: #fff;
    transition: 0.3s ease;
    overflow: hidden;
}

.menu-mobile-icon {
    font-size: 28px;
    cursor: pointer;
}

.menu-mobile-icon:hover {
    opacity: 0.5;
}

.menu-mobile ul {
    padding: 5px;
}
.menu-mobile li a {
    color: #558e60;
    padding: 15px;
}

.menu-mobile li a:hover {
    color: #b9ad81;
    padding: 15px;
    background-color: #e1e6e1;
}

#menu-toggle {
    display: none;
}

#menu-toggle:checked + .menu-mobile {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>
