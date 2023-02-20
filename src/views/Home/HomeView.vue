<template>
  <main>
    <hero-banner title="Aqui seu bem estar é coisa séria!" class="home-hero" />
    <main-title>O maior hotel da cidade</main-title>
    <section id="sobre" class="section">
      <div class="container">
        <div class="item-wrapper-image">
          <img
            class="item-image"
            src="@/assets/images/sobre-acomodacao.png"
            alt="Um quarto com cama de casal, espelho e quadro na parede" />
        </div>
        <div class="content-wrapper">
          <div class="item-content-wrapper">
            <img
              class="icon"
              src="@/assets/images/quarto.svg"
              alt="Ícone de um quarto" />
            <h3 class="subtitle"></h3>
            <main-subtitle>As melhores acomodações</main-subtitle>
          </div>

          <main-paragraph>
            Colocamos você no centro de tudo, com hotéis projetados em destinos
            icônicos, vistas impressionantes e experiências inigualáveis, para
            que aproveite nada menos do que extraordinários momentos.
          </main-paragraph>
          <link-button href="/acomodacoes">Saiba mais</link-button>
        </div>
      </div>
    </section>

    <article>
      <main-title>Nossas acomodações</main-title>
      <div class="home-acomodacoes">
        <div class="home-acomodacoes-images container">
          <img
            src="@/assets/images/thumb-01.png"
            alt="Uma sala com duas cadeiras e mesa de madeira" />
          <img
            src="@/assets/images/thumb-02.png"
            alt="Um banheiro com pia, chuveiro e banheira" />
          <img
            src="@/assets/images/thumb-03.png"
            alt="Um quarto com cama de casal e divisória para roupas" />
        </div>
        <link-button href="/sobre">Conheça nossos serviços</link-button>
      </div>
    </article>

    <article class="home-reserva">
      <div class="home-reserva-container">
        <div class="home-reserva-content">
          <h2>Faça agora mesmo sua reserva</h2>
          <link-button href="/reservar">Fazer reserva</link-button>
        </div>
        <div class="home-reserva-image">
          <img
            src="@/assets/images/bell.png"
            alt="Uma mão tocando em um sino" />
        </div>
      </div>
    </article>

    <section id="sobre" class="section">
      <div class="container reverse">
        <div class="item-wrapper-image">
          <img
            class="item-image"
            src="@/assets/images/steak.jpg"
            alt="Prato de carne servido com molho" />
        </div>
        <div class="content-wrapper">
          <div class="item-content-wrapper">
            <img
              class="icon"
              src="@/assets/images/gastronomia.svg"
              alt="Ícone de um chef de cozinha" />
            <main-subtitle>Gastronomia cinco estrelas</main-subtitle>
          </div>
          <main-paragraph>
            Primeiro hotel da região a fazer parte do selo The Leading Hotels of
            the World, sinônimo de design, arquitetura, luxo e sofisticação no
            mundo todo. Cozinha de alto requinte com os chefs mais renomados no
            mundo gastronômico.
          </main-paragraph>

          <link-button href="/sobre">Saiba mais</link-button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeroBanner from "@/components/commons/HeroBanner";
import MainTitle from "@/components/commons/MainTitle";
import MainSubtitle from "@/components/commons/MainSubtitle";
import LinkButton from "@/components/commons/LinkButton";
import MainParagraph from "@/components/commons/MainParagraph";

export default {
  name: "HomeView",
  components: {
    HeroBanner,
    LinkButton,
    MainTitle,
    MainSubtitle,
    MainParagraph,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
