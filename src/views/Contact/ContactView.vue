<template>
    <MainHeader />
    <main>
        <div class="contact-main cover-background">
            <h1 class="hero-title">Estamos aqui para ajudar você</h1>
        </div>
        <div class="contact">
            <section class="section">
                <h2 class="title">Entre em contato conosco</h2>
                <h3>Use o formulário abaixo para nos enviar sua mensagem</h3>
                <article class="container">
                    <div class="itens-form">
                        <div class="nomes">
                            <div class="nome1">
                                <label for="Nome">Nome</label>
                                <input type="text" />
                            </div>
                            <div class="nome2">
                                <label for="Nome">Sobrenome</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div class="cells">
                            <label for="email">E-Mail </label>
                            <input type="email" />
                        </div>

                        <div class="cells">
                            <label for="subject">Assunto</label>
                            <select name="assunto" class="input-text-primary">
                                <option value="">Selecione</option>
                                <option value="cancelamento">
                                    Cancelamento de reserva
                                </option>
                                <option value="ouvidoria">Ouvidoria</option>
                                <option value="departamento">
                                    Departamento Financeiro
                                </option>
                            </select>
                        </div>

                        <div class="cells">
                            <label for="message">Mensagem</label>
                            <textarea
                                name="message"
                                class="message"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <input class="btn" type="submit" value="Enviar" />
                    </div>
                </article>
            </section>
        </div>

        <section>
            <article>
                <h2 class="title">Nossa localização</h2>
                <div class="about-localization">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.1337409414386!2d-34.89226348487034!3d-8.087840794177101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f39459eb051%3A0xaa5e663f1e696acb!2sR.%20Bar%C3%A3o%20de%20Santo%20%C3%82ngelo%20-%20Pina%2C%20Recife%20-%20PE%2C%2051110-180!5e0!3m2!1spt-BR!2sbr!4v1671629309863!5m2!1spt-BR!2sbr"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
            </article>
        </section>
    </main>
    <MainFooter />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
    name: "ContactView",
    components: {
        MainHeader,
        MainFooter,
    },
};
</script>

<style src="./style.scss" lang="scss" />
