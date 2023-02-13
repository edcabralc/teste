<template>
  <div>
    <MainHeader />
    <main>
      <section class="acomodacoes-hero cover-background">
        <h1 class="hero-title">Confortável como um abraço!</h1>
      </section>
      <section class="acomodacao">
        <article class="container-acomodacao">
          <h2 class="title">Nossas Acomodações</h2>
          <Acomodacao />
        </article>
      </section>

      <h2 class="title">Acomodação Destaque</h2>

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
              <h3 class="subtitle">Deluxe 02</h3>
            </div>
            <p class="paragraph"
              >O mais completo no hotel tanto em termos de serviço como de
              acomodações. Um deck exclusivo com vista para o mar, a melhor
              vista do hotel.</p
            >
            <a class="btn" href="#">Saiba Mais</a>
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
            <a class="btn" href="#">Fazer reserva</a>
          </div>
          <div class="home-reserva-image">
            <img
              src="@/assets/images/bell.png"
              alt="Uma mão tocando em um sino" />
          </div>
        </div>
      </article>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/commons/MainHeader.vue";
import MainFooter from "@/components/commons/MainFooter.vue";
import Acomodacao from "@/components/Acomodacao.vue";

export default {
  name: "RoomsView",
  components: {
    MainHeader,
    MainFooter,
    Acomodacao,
  },
};
</script>

<style src="./style.scss" lang="scss" />
