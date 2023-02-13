<template>
  <MainHeader />
  <main>
    <div class="register-main cover-background">
      <h1 class="hero-title">Registro de Novo Usuário</h1>
    </div>

    <h2 class="title">Bem-vindo ao melhor hotel da cidade</h2>

    <section class="section">
      <div class="container">
        <article class="register">
          <div class="itens-form">
            <div class="cells">
              <label for="Nome">Nome Completo: </label>
              <input type="text" />
            </div>
            <div class="cells">
              <label for="email">E-Mail: </label>
              <input type="email" />
            </div>
            <div class="cells">
              <label for="Telefone">Telefone: </label>
              <input type="number" />
            </div>
            <div class="cells">
              <label for="nascimento">Data de Nascimento </label>
              <input type="date" />
            </div>
            <div class="cells">
              <label for="senha">Senha </label>
              <input type="password" />
            </div>
            <input class="btn" type="submit" value="Enviar" />
          </div>
        </article>
      </div>
    </section>
  </main>
  <MainFooter />
</template>

<script>
import MainFooter from "@/components/commons/MainFooter.vue";
import MainHeader from "@/components/commons/MainHeader.vue";

export default {
  name: "RegisterView",
  components: { MainHeader, MainFooter },
};
</script>

<style src="./style.scss" lang="scss" />
