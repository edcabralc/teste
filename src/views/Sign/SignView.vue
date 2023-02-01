<template>
  <main>
    <section class="sign-in">
      <div class="sign-in-container">
        <div class="sign-in-cover"></div>
        <div class="sign-in-forms">
          <div class="sign-in-header">
            <router-link to="/"
              ><img src="@/assets/images/logo.svg" alt="Chloe Gran Hotel"
            /></router-link>
            <nav class="mobile-nav">
              <label class="menu-mobile-icon" for="menu-toggle">&#9776;</label>
              <input type="checkbox" id="menu-toggle" />
              <ul class="menu-mobile">
                <li>
                  <a href="@/about.html">O Hotel</a>
                </li>
                <li>
                  <a href="@/acomodacoes.html">Acomodações</a>
                </li>
                <li>
                  <a href="@/reservas.html">Reservas</a>
                </li>
                <li>
                  <a href="@/contato.html">Contato</a>
                </li>
                <li>
                  <a href="@/login.html">Login</a>
                </li>
              </ul>
            </nav>
          </div>
          <form method="get" id="myForm">
            <label for="nome">Endereço de Email</label>
            <input
              class="input-text-primary"
              type="email"
              name="login"
              id="login"
              required
            />
            <label for="senha">Senha</label>
            <input
              class="input-text-primary"
              type="password"
              name="senha"
              id="senha"
              required
            />
            <div class="sign-in-forgot_pass">
              <a href="recuperacao.html">Esqueceu sua senha?</a>
            </div>
            <input
              class="btn"
              type="submit"
              formaction="../index.html"
              onclick="return validarFormulario();"
              value="Confirmar"
            />
          </form>
          <div class="sign-in-help">
            <h3>Não possui conta?</h3>
            <a href="register.html">Criar uma nova conta</a>
          </div>
        </div>
      </div>
      <!-- </div>
      </div> -->
    </section>
  </main>
</template>

<script>
export default {
  name: "SignView",
    methods: {
        validarFormulario() {
            
        }
    }
};


</script>

<style src="./style.scss" lang="scss" scoped />
