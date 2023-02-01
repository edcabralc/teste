<template>
    <MainHeader />
    <main>
        <section class="acomodacoes-hero cover-background">
            <h1 class="hero-title">Confortável como um abraço!</h1>
        </section>
        <section class="acomodacao">
            <article class="container-acomodacao">
                <h2 class="title">Nossas Acomodações</h2>

                <div class="flex-img">
                    <div class="foto-hover">
                        <div class="foto-info">
                            <h5>Standard-01</h5>
                            <p>Quarto para solteiro com cama dupla</p>
                        </div>
                        <img
                            src="@/assets/images/acomodacoes/standard/1.jpg"
                            alt=""
                        />
                    </div>
                    <div class="foto-hover">
                        <div class="foto-info">
                            <h5>Standard-02</h5>
                            <p>Quarto com cama individual com mais conforto</p>
                        </div>
                        <img
                            src="@/assets/images/acomodacoes/standard/casal.jpeg"
                            alt=""
                        />
                    </div>
                    <div class="foto-hover">
                        <div class="foto-info">
                            <h5>Standard-03</h5>
                            <p>
                                Quarto para casais que querem o melhor sem pagar
                                muito
                            </p>
                        </div>
                        <img
                            src="@/assets/images/acomodacoes/standard/5.jpg"
                            alt=""
                        />
                    </div>
                    <div class="foto-hover">
                        <div class="foto-info">
                            <h5>Master-01</h5>
                            <p>Conforto e qualidade</p>
                        </div>
                        <img
                            src="@/assets/images/acomodacoes/master/03.jpg"
                            alt=""
                        />
                    </div>
                    <div class="foto-hover">
                        <div class="foto-info">
                            <h5>Master-02</h5>
                            <p>Um quarto aconchegante e muito conforto</p>
                        </div>
                        <img
                            src="@/assets/images/acomodacoes/master/02.jpg"
                            alt=""
                        />
                    </div>
                    <div class="foto-hover">
                        <div class="foto-info">
                            <h5>Master-03</h5>
                            <p>Conforme é o que temos a oferecer.</p>
                        </div>
                        <img
                            src="@/assets/images/acomodacoes/master/master.jpg"
                            alt=""
                        />
                    </div>
                    <div class="foto-hover">
                        <div class="foto-info">
                            <h5>Deluxe-01</h5>
                            <p>Quarto de luxo e muito conforto</p>
                        </div>
                        <img
                            src="@/assets/images/acomodacoes/deluxe/1.jpeg"
                            alt=""
                        />
                    </div>
                    <div class="foto-hover">
                        <div class="foto-info">
                            <h5>Deluxe-02</h5>
                            <p>Quarto com acesso a deck privativo</p>
                        </div>
                        <img
                            src="@/assets/images/acomodacoes/deluxe/luxo1.jpg"
                            alt=""
                        />
                    </div>
                    <div class="foto-hover">
                        <div class="foto-info">
                            <h5>Deluxe-03</h5>
                            <p>
                                Todo conforto e comodidade da melhor suite de
                                luxo
                            </p>
                        </div>
                        <img
                            src="@/assets/images/acomodacoes/deluxe/luxo2.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </article>
        </section>

        <h2 class="title">Acomodação Destaque</h2>

        <section id="sobre" class="section">
            <div class="container reverse">
                <div class="item-wrapper-image">
                    <img
                        class="item-image"
                        src="@/assets/images/acomodacoes/deluxe/luxo1.jpg"
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
                        <h3 class="subtitle">Deluxe 02</h3>
                    </div>
                    <p class="paragraph">
                        O mais completo no hotel tanto em termos de serviço como
                        de acomodações. Um deck exclusivo com vista para o mar,
                        a melhor vista do hotel.
                    </p>
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
                        alt="Uma mão tocando em um sino"
                    />
                </div>
            </div>
        </article>
    </main>
    <MainFooter />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
    name: "RoomsView",
    components: {
        MainHeader,
        MainFooter,
    },
};
</script>

<style src="./style.scss" lang="scss" scoped />
