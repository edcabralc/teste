<template>
    <MainHeader />
    <main>
        <section class="home-hero cover-background">
            <h1 class="hero-title">Aqui seu bem estar é coisa séria!</h1>
        </section>

        <h2 class="title">O maior hotel da cidade</h2>
        <section id="sobre" class="section">
            <div class="container">
                <div class="item-wrapper-image">
                    <img
                        class="item-image"
                        src="@/assets/images/sobre-acomodacao.png"
                        alt="Um quarto com cama de casal, espelho e quadro na parede"
                    />
                </div>
                <div class="content-wrapper">
                    <div class="item-content-wrapper">
                        <img
                            class="icon"
                            src="@/assets/images/quarto.svg"
                            alt="Ícone de um quarto"
                        />
                        <h3 class="subtitle">As melhores acomodações</h3>
                    </div>
                    <p class="paragraph">
                        Colocamos você no centro de tudo, com hotéis projetados
                        em destinos icônicos, vistas impressionantes e
                        experiências inigualáveis, para que aproveite nada menos
                        do que extraordinários momentos.
                    </p>
                    <a class="btn" href="#">Saiba Mais</a>
                </div>
            </div>
        </section>

        <article>
            <h2 class="title">Nossas acomodações</h2>
            <div class="home-acomodacoes">
                <div class="home-acomodacoes-images container">
                    <img
                        src="@/assets/images/thumb-01.png"
                        alt="Uma sala com duas cadeiras e mesa de madeira"
                    />
                    <img
                        src="@/assets/images/thumb-02.png"
                        alt="Um banheiro com pia, chuveiro e banheira"
                    />
                    <img
                        src="@/assets/images/thumb-03.png"
                        alt="Um quarto com cama de casal e divisória para roupas"
                    />
                </div>
                <a class="btn" href="#">Conheça nossos serviços</a>
            </div>
        </article>

        <article class="home-reserva">
            <div class="home-reserva-container">
                <div class="home-reserva-content">
                    <h2>Faça agora mesmo sua reserva</h2>
                    <a class="btn" href="#">Fazer reserva</a>
                </div>
                <div class="home-reserva-image">
                    <img
                        src="@/assets/images/bell.png"
                        alt="Uma mão tocando em um sino"
                    />
                </div>
            </div>
        </article>

        <section id="sobre" class="section">
            <div class="container reverse">
                <div class="item-wrapper-image">
                    <img
                        class="item-image"
                        src="@/assets/images/steak.jpg"
                        alt="Prato de carne servido com molho"
                    />
                </div>
                <div class="content-wrapper">
                    <div class="item-content-wrapper">
                        <img
                            class="icon"
                            src="@/assets/images/gastronomia.svg"
                            alt="Ícone de um chef de cozinha"
                        />
                        <h3 class="subtitle">Gastronomia 5 estrelas</h3>
                    </div>
                    <p class="paragraph">
                        Primeiro hotel da região a fazer parte do selo The
                        Leading Hotels of the World, sinônimo de design,
                        arquitetura, luxo e sofisticação no mundo todo. Cozinha
                        de alto requinte com os chefs mais renomados no mundo
                        gastronômico.
                    </p>
                    <a class="btn" href="#">Saiba Mais</a>
                </div>
            </div>
        </section>
    </main>
    <MainFooter />
</template>

<script>
import MainFooter from "@/components/MainFooter.vue";
import MainHeader from "@/components/MainHeader.vue";

export default {
    name: "HomeView",
    components: {
        MainHeader,
        MainFooter,
    },
};
</script>

<style src="./style.scss" lang="scss"  />
