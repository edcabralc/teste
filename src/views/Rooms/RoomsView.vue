<template>
  <main>
    <hero-banner title="Confortável como um abraço!" class="acomodacoes-hero" />
    <section class="acomodacao">
      <article class="container-acomodacao">
        <main-title>Nossas acomodações</main-title>
        <Acomodacao />
      </article>
    </section>

    <main-title>Acomodação destaque</main-title>

    <section id="sobre" class="section">
      <div class="container reverse">
        <div class="item-wrapper-image">
          <img
            class="item-image"
            src="@/assets/images/acomodacoes/deluxe/luxo1.jpg"
            alt="Um quarto com cama de casal, espelho e quadro na parede" />
        </div>
        <div class="content-wrapper">
          <div class="item-content-wrapper">
            <img
              class="icon"
              src="@/assets/images/quarto.svg"
              alt="Ícone de um quarto" />
            <main-subtitle>Deluxe 02</main-subtitle>
          </div>
          <main-paragraph>
            O mais completo no hotel tanto em termos de serviço como de
            acomodações. Um deck exclusivo com vista para o mar, a melhor vista
            do hotel.
          </main-paragraph>
          <link-button href="/acomodacoes">Saiba mais</link-button>
        </div>
      </div>
    </section>

    <div class="box-caracteristicas">
      <img src="@/assets/images/caracteristicas.svg" alt="" />
    </div>
    <article class="home-reserva acomodacao">
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
  </main>
</template>

<script>
import Acomodacao from "@/components/Acomodacao";
import MainTitle from "@/components/commons/MainTitle";
import MainParagraph from "@/components/commons/MainParagraph";
import HeroBanner from "@/components/commons/HeroBanner";
import LinkButton from "@/components/commons/LinkButton";
import MainSubtitle from "@/components/commons/MainSubtitle";

export default {
  name: "RoomsView",
  components: {
    MainParagraph,
    MainTitle,
    LinkButton,
    HeroBanner,
    Acomodacao,
    MainSubtitle,
  },
};
</script>

<style src="./style.scss" lang="scss" />
