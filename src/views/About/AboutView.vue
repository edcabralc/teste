<template>
  <main>
    <hero-banner title="Conheça nossa história" class="about-hero" />
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
    <main-title>Sobre nós</main-title>
    <section id="sobre" class="section">
      <div class="container reverse">
        <div class="item-wrapper-image">
          <img
            class="item-image"
            src="@/assets/images/pscina.jpg"
            alt="Piscina do Hotel" />
        </div>
        <div class="content-wrapper">
          <div class="item-content-wrapper">
            <img
              class="icon"
              src="@/assets/images/services.svg"
              alt="Ícone de um quarto" />
            <main-subtitle>Serviço de alta qualidade</main-subtitle>
          </div>
          <main-paragraph>
            Nós oferecemos serviços de alta qualidade, com atendimento
            personalizado e estilo próprio. A cada dia buscamos criar um
            ambiente agradável e seguro para quem se hospeda conosco. Nosso
            objetivo é fazer deste Hotel, uma extensão de sua casa!
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
    <article class="home-help">
      <div class="help-container">
        <div class="about-help-image">
          <img
            class="image-recepcionists"
            src="@/assets/images/receptionists.png"
            alt="" />
        </div>
        <div class="about-help-description">
          <div class="about-help-icon">
            <img class="icon" src="@/assets/images/sino.png" alt="" />
            <h3>Precisa de ajuda?</h3>
          </div>
          <main-paragraph>
            Colocamos você no centro de tudo, com hotéis projetados em destinos
            icônicos, vistas impressionantes e experiências inigualáveis, para
            que aproveite nada menos do que extraordinários momentos.
          </main-paragraph>
          <link-button href="/contato">Fale conosco</link-button>
        </div>
      </div>
    </article>

    <section>
      <article>
        <main-title>Nossa localização</main-title>
        <div class="about-localization">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.1337409414386!2d-34.89226348487034!3d-8.087840794177101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f39459eb051%3A0xaa5e663f1e696acb!2sR.%20Bar%C3%A3o%20de%20Santo%20%C3%82ngelo%20-%20Pina%2C%20Recife%20-%20PE%2C%2051110-180!5e0!3m2!1spt-BR!2sbr!4v1671629309863!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </article>
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
  name: "AboutView",
  components: {
    HeroBanner,
    LinkButton,
    MainTitle,
    MainSubtitle,
    MainParagraph,
  },
};
</script>

<style src="./style.scss" lang="scss" />
