<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <router-link to="/">
          <img src="@/assets/images/logo.svg" alt="Chloe Grand Hotel" />
        </router-link>
      </div>
      <div class="footer-item_container">
        <div class="footer-item">
          <h3>O Hotel</h3>
          <ul class="footer-menu">
            <NavLink />
          </ul>
        </div>
        <div class="footer-item">
          <h3>Contato</h3>
          <ul>
            <li>oi@chloegrandhotel.com</li>
            <li>81 3139-8800</li>
          </ul>
        </div>
        <div class="footer-item">
          <h3>Onde estamos</h3>
          <ul>
            <li>R. Barão de Santo Ângelo, 100</li>
            <li>Recife - Pernambuco - Brasil</li>
          </ul>
          <h3>Nossas redes</h3>
          <ul>
            <div class="footer-item_social">
              <li>
                <a href="#">
                  <img
                    src="@/assets/images/instagram.svg"
                    alt="Rede Social Instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="@/assets/images/twitter.svg"
                    alt="Rede Social Twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="@/assets/images/facebook.svg"
                    alt="Rede Social Facebook" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <p class="copy">&copy; 2022 - Todos os direitos reservados</p>
</template>

<script>
import NavLink from "@/components/commons/NavLink";

export default {
  name: "MainFooter",
  components: { NavLink },
};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 68px 0px;
  margin: 0 32px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 68px;
  max-width: 1090px;
  width: 100%;
  padding: 68px 0px;
  border-top: 3px solid rgba(185, 173, 129, 0.3);
}

.footer-logo {
  width: 257px;
}

.footer-item_container {
  display: flex;
  flex: 1;
  gap: 42px;
}

.footer-item,
.footer-item > ul,
address,
a,
.footer-menu {
  display: flex;
  flex-direction: column;
  gap: 22px;
  color: #000;
}

.footer-menu a {
  font-size: 16px;
  color: #686b68;
}

.footer-menu a:hover {
  color: #b9ad81;
}

.copy {
  text-align: center;
  background-color: #eff5f0;
  padding: 23px 0;
  width: 100%;
  margin: 0;
}

.footer-item_social {
  display: flex;
  gap: 15px;
}
</style>
