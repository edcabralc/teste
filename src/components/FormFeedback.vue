<template>
  <main>
    <h2 class="title title-feedback">Como foi sua Experiência conosco?</h2>
    <div class="content-subtitle">
      <h4 class="subtitle">Conta pra gente!</h4>
      <img src="@/assets/images/message-alt.svg" alt="Icon Message" />
    </div>
    <section class="section">
      <article class="container">
        <div class="itens-form">
          <div class="nomes">
            <div class="nome1">
              <label for="Nome">Nome:</label>
              <input type="text" />
            </div>
            <div class="nome2">
              <label for="Nome">Sobrenome:</label>
              <input type="text" />
            </div>
          </div>
          <div class="cells">
            <label for="message">Mensagem:</label>
            <textarea
              name="message"
              class="message"
              cols="30"
              rows="10"></textarea>
          </div>
          <div class="avaliacao-content">
            <p>Avalie nossos serviços:</p>
            <ul class="avaliacao-icons">
              <li class="star-icon ativo" data-avaliacao="1"></li>
              <li class="star-icon" data-avaliacao="2"></li>
              <li class="star-icon" data-avaliacai="3"></li>
              <li class="star-icon" data-avaliacao="4"></li>
              <li class="star-icon" data-avaliacao="5"></li>
            </ul>
          </div>
          <input class="btn" type="submit" value="Enviar" />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "FormFeedback",
};
</script>

<style lang="scss" scoped>
/* Style de Titles and Form */
.title-feedback {
  font-size: 40px;
}
.content-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.subtitle {
  text-align: center;
  font-size: 20px;
}
.container {
  background-color: #eff5f0;
  width: 700px;
  border-radius: 12px;
}
.itens-form {
  margin: 50px;
}
.btn {
  margin-top: 10px;
}

/* Style Star */

.avaliacao-content {
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  gap: 10px;
}

.avaliacao-icons {
  margin: 10px 0 20px 0;
  text-align: right;
  display: flex;
  align-items: center;
  gap: 5px;
}

.star-icon {
  width: 30px;
  list-style: none;
  cursor: pointer;
  color: #ffe500;
  font-size: 30px;
}

.star-icon::before {
  content: "\2605";
}

.star-icon.ativo ~ .star-icon::before {
  content: "\2606";
}

.avaliacao-icons:hover .star-icon::before {
  content: "\2605";
}

.star-icon:hover ~ .star-icon::before {
  content: "\2606";
}
</style>
