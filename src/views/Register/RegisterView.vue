<template>
  <main>
    <hero-banner title="Registro de Novo Usuário" class="register-main" />
    <main-title>Bem-vindo ao melhor hotel da cidade</main-title>
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
</template>

<script>
import HeroBanner from "@/components/commons/HeroBanner";
import MainTitle from "@/components/commons/MainTitle";

export default {
  name: "RegisterView",
  components: { HeroBanner, MainTitle },
};
</script>

<style src="./style.scss" lang="scss" scoped />
