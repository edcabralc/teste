<template>
    <router-view />
</template>

<style lang="scss">
@use "@/assets/scss/base" as *;
*,
*:after,
*:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    display: block;
    max-width: 100%;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

// test

html {
    font-family: "Inter", sans-serif;
}

/* container */
.section {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 68px 0px;
    margin: 0 32px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
    width: 100%;
    max-width: 1090px;
}

.reverse {
    flex-direction: row-reverse;
}

.content-wrapper {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    gap: 58px;
}

.item-content-wrapper {
    display: flex;
    gap: 18px;
    align-items: center;
}

.item-wrapper-image {
    flex: 1 1 300px;
    max-width: 100%;
}

.item-image {
    border-radius: 15px;
    height: 530px;
    object-fit: cover;
}

/* end container */

/* Titulos e paragrapho */
.hero-title {
    font-size: 86px;
    font-weight: 700;
    line-height: 104px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: #242222;
    font-weight: 700;
    padding: 28px 0;
    margin: 38px 0;
    position: relative;
    text-align: center;
}

.title::after {
    content: "";
    width: 268px;
    height: 12px;
    position: absolute;
    height: 5px;
    background-color: #b9ad81;
    bottom: 0;
}

.subtitle {
    font-size: 32px;
    font-weight: 700;
    color: #242222;
}

.paragraph {
    font-size: 24px;
    color: #686b68;
    line-height: 36px;
    font-weight: 400px;
    text-align: left;
}

/* end Titulos */

/* Buttons */
.btn {
    width: 288px;
    height: auto;
    border-radius: 9px;
    border: none;
    box-shadow: none;
    font-size: 20px;
    padding: 12px 22px;
    color: #fff;
    background-color: #558e60;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    text-align: center;
}

.btn:hover {
    background-color: #558e60;
    color: #fff;
    opacity: 0.5;
    transition: ease 0.2s;
    cursor: pointer;
}
/* end Buttons */

/* icons */
.icons {
    width: 46px;
    height: auto;
}
/* end icons */

/* Background HERO */
.cover-background {
    padding: 164px;
    width: 100%;
    height: 634px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    background-size: cover;
}

/* ***************************** */

/* media queries */

@media (max-width: 1120px) {
    .header-container {
        justify-content: center;
    }
    .menu {
        padding-top: 32px;
    }
    .home-acomodacoes-images {
        font-size: 86rem;
    }
}

@media (max-width: 960px) {
    .header-container {
        justify-content: space-between;
    }
    .menu {
        display: none;
    }
    .mobile-nav {
        display: block;
    }
    .hb {
        display: block;
    }

    .cover-background {
        padding: 52px;
        width: 100%;
        height: 495px;
    }
    .hero-title {
        font-size: 56px;
        line-height: 64px;
    }

    .home-reserva-container {
        gap: 58px;
        flex-direction: column-reverse;
    }

    .home-reserva-content {
        align-items: center;
        text-align: center;
    }
}

@media (max-width: 750px) {
    .cover-background {
        padding: 32px;
        width: 100%;
        height: 366px;
    }

    .hero-title {
        font-size: 32px;
        line-height: 44px;
    }

    .section {
        padding: 32px 0;
    }

    .content-wrapper {
        align-items: center;
        gap: 38px;
        text-align: center;
    }

    .title {
        font-size: 48px;
        font-weight: 700;
        padding: 28px 32px;
        text-align: center;
    }

    .subtitle {
        font-size: 28px;
    }

    .paragraph {
        font-size: 16px;
        line-height: 28px;
    }

    .footer {
        padding: 22px 0px;
    }
    .footer-container {
        gap: 42px;
        padding: 42px 0px;
        flex-direction: column;
    }

    .footer-item_container {
        width: 100%;
        flex-direction: column;
    }

    .footer-item {
        width: 100%;
        gap: 22px;
    }

    .footer-item > ul,
    .footer-menu {
        gap: 12px;
    }

    .title {
        font-size: 32px;
    }
}

@media (max-width: 375px) {
    .logo {
        width: 50%;
    }
    .hb {
        width: 80%;
    }
}

//
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}
</style>
