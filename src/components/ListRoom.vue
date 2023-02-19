<template>
  <div>
    <main class="main-reserva">
      <hero-banner title="Reserve uma de nossas acomodações" class="book-hero">
      </hero-banner>
      <section class="section">
        <div class="container">
          <div class="right-reserva">
            <div class="card-inputs">
              <div>
                <h2>{{ titleMinhaReserva }}</h2>
                <p>{{ paragraphMinhaReserva }}</p>
              </div>
              <div class="flex">
                <div class="input-group">
                  <label for="datacheckin">Data check-in:</label>
                  <input
                    type="date"
                    v-model="dataCheckIn"
                    class="input-text-primary"
                    data-checkin="datacheckin" />
                  <!-- " @change="getDataCheckIn -->
                </div>
                <div class="input-group">
                  <label for="datacheckout">Data check-out:</label>
                  <input
                    type="date"
                    v-model="dataCheckout"
                    class="input-text-primary"
                    data-checkout="datacheckout" />
                </div>
              </div>
              <div class="flex">
                <div class="input-group">
                  <label for="qtde_adultos">Adultos:</label>
                  <input
                    type="number"
                    @change="totalPessoasAcomodacao"
                    v-model="pessoa.adulto"
                    max="10"
                    min="0"
                    class="input-text-primary"
                    data-qdtA="adultos" />
                </div>
                <div class="input-group">
                  <label for="qtde_criancas">Crianças:</label>
                  <input
                    type="number"
                    @change="totalPessoasAcomodacao"
                    v-model="pessoa.crianca"
                    max="10"
                    min="0"
                    class="input-text-primary"
                    data-qdtC="criancas" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="container-tipo-acomodacao">
            <h2>{{ titleH2 }}</h2>
            <div
              v-for="({ id, title, price, paragraph, src }, index) in rooms"
              @click="getItem(rooms, id)"
              class="container-titulos-acomodacao"
              :key="index">
              <input
                class="item-check"
                type="radio"
                name="acomodacao"
                :id="title"
                :value="title" />
              <!--:checked="!checked"-->
              <label :for="title" @click="getAcomodacao(title, price)">
                <div class="item-label">
                  <div>
                    <div class="flex">
                      <span class="circle">
                        <span class="checkmark"></span>
                      </span>
                      <h3>{{ title }}</h3>
                    </div>
                    <p>
                      {{ paragraph }}
                    </p>
                    <p class="preco">R$ {{ price }},00</p>
                  </div>
                  <img :src="`${src}`" :alt="title" />
                </div>
              </label>
            </div>
          </div>
          <div class="container-resumo-reserva">
            <h2>Resumo da reserva</h2>
            <div class="container-listas">
              <ul>
                <li class="flex-space">
                  <span>Acomodação:</span>
                  <span>
                    {{ acomodacao }}
                  </span>
                </li>
                <li class="flex-space">
                  <span>Check-in:</span>
                  <span>
                    {{ dataCheckIn }}
                  </span>
                </li>
                <li class="flex-space">
                  <span>Check-out:</span>
                  <span>
                    {{ dataCheckout }}
                  </span>
                </li>
                <li class="flex-space">
                  <span>Pessoas:</span>
                  <span> {{ pessoa.total }} </span>dadosAcomodacoes
                </li>
              </ul>

              <div class="add-servicos">
                <span>
                  <a href="" class="btn-add-servicos">
                    Adicionar mais serviços
                  </a>
                </span>
                <div class="add-servicos-content">
                  <ul>
                    <li
                      v-for="(valor, servico) in servicos"
                      :key="servico"
                      class="flex">
                      <input
                        type="checkbox"
                        :name="servico"
                        :id="servico"
                        @click="addServico(servico)" />
                      <label :for="servico" class="flex-space">
                        <span>{{ servico }} </span>
                        <span>R$ {{ valor }},00</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <ul>
                <li class="flex-space">
                  <span> Subtotal: </span>
                  <span>
                    R$
                    {{ subtotal ? parseInt(subtotal).toFixed(2) : "0.00" }}
                  </span>
                </li>
                <li class="flex-space">
                  <span> Total: </span>
                  <span id="total"
                    >R$ {{ total ? parseInt(total).toFixed(2) : "0.00" }}</span
                  >
                </li>
              </ul>
              <input
                type="button"
                @click.once="desconto"
                class="gerarDesconto"
                value="Gerar Desconto" />
              <p class="add-cupom" v-show="showCupom">
                Seu Cupom: <strong> {{ cupom }} </strong>
              </p>
              <input
                type="text"
                name="cupomDesconto"
                v-model="cupomDesconto"
                id="cupomDesconto"
                class="desconto"
                @blur="totalReserva()" />
            </div>
            <!-- <link-button @click="openModal" href="/acomodacoes"
              >Continuar</link-button
            > -->
            <a class="btn" @click="openModal">Continuar</a>
          </div>
        </div>
      </section>
      <ModalBook
        :lista="rooms"
        @click="modalOpen"
        v-show="modalOpen"></ModalBook>
    </main>
  </div>
</template>

<script>
import { rooms } from "../helpers/dataRooms";
import ModalBook from "./ModalBook";
import HeroBanner from "./commons/HeroBanner";
import LinkButton from "./commons/LinkButton";

export default {
  name: "ListRoom",
  data() {
    return {
      titleHero: "Reserve uma de nossas acomodações",
      titleH2: "Escolha o tipo de acomodação",
      titleMinhaReserva: "Minha reserva",
      paragraphMinhaReserva:
        "Informe a data de entrada, a saída e a quantidade de pessoas.",
      rooms,
      acomodacao: "",
      dataCheckIn: "",
      dataCheckout: "",
      valorAcomodacao: "",
      showCupom: false,
      cupom: "",
      // servicos: [{cofre: 50}, {lavanderia: 100}, {cafe: 50}, {massagem: 150}, {sala: 350}, {passeio: 250}],
      servicos: {
        Cofre: 50,
        Lavanderia: 100,
        Cafe: 50,
        Massagem: 150,
        Sala: 350,
        Passeio: 250,
      },
      pessoa: {
        adulto: "",
        crianca: "",
        total: "",
      },
      cupomDesconto: "",
      subtotal: "",
      total: "",
      carrServicos: [],
      modalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
      console.log(this);
      console.log(this.modalOpen);
    },
    onToggle: (elem) => (elem = !elem),
    getItem: (arr, id) => {
      arr.filter((item, index, arrr) => {
        if (item.id == id) {
          // console.log(item);
        }
      });
    },
    getAcomodacao(title, price) {
      this.acomodacao = title;
      this.valorAcomodacao = parseInt(price).toFixed(2);
      this.subtotal = this.subTotalReserva;
      this.total = this.subtotal;
    },
    totalPessoasAcomodacao() {
      let pAdulto = this.pessoa.adulto ? parseInt(this.pessoa.adulto) : 0;
      let pInfantil = this.pessoa.crianca ? parseInt(this.pessoa.crianca) : 0;
      this.pessoa.total = pAdulto + pInfantil;
      this.subtotal = this.subTotalReserva;
      this.total = this.subtotal;
    },
    addServico(servico) {
      if (!this.inServico(servico)) {
        this.carrServicos.push(servico);
        this.subtotal = this.subTotalReserva;
        this.total = this.subtotal;
      } else if (this.inServico(servico)) {
        this.removeServico(servico);
        this.subtotal = this.subTotalReserva;
        this.total = this.subtotal;
      }
    },
    inServico(servico) {
      return this.carrServicos.indexOf(servico) != -1;
    },
    removeServico(servico) {
      const car = this.carrServicos.filter((serv) => {
        return servico != serv;
      });
      this.carrServicos = car;
    },
    desconto() {
      this.showCupom = !this.showCupom;
      let codigo = Math.random().toString(36).substring(2, 9).toUpperCase();
      this.cupom = codigo;
      // alert(`Código: ${codigo}`);
    },
    totalReserva() {
      if (this.subtotal && this.cupomDesconto != "") {
        this.total = this.subtotal - this.subtotal * 0.1;
      } else if (this.subtotal) {
        this.subtotal = this.subTotalReserva;
        this.total = this.subtotal;
      }
    },
  },
  computed: {
    subTotalReserva() {
      let totalServico = 0;
      if (this.carrServicos.length > 0) {
        this.carrServicos.forEach((e) => {
          totalServico += this.servicos[e];
        });
      }
      if (!this.pessoa.total || !this.valorAcomodacao) {
        return totalServico;
      } else {
        return this.pessoa.total
          ? this.pessoa.total * this.valorAcomodacao + totalServico
          : this.valorAcomodacao + totalServico;
      }
    },
    acomodacoes() {
      return this.$store.state.acomodacoes;
    },
  },
  components: { ModalBook, HeroBanner, LinkButton },
  created() {
    this.$store.dispatch("loadRooms");
  },
};
</script>

<style lang="scss">
.container-tipo-acomodacao {
  flex: 2;
}

.container-titulos-acomodacao img {
  flex: 1 0 30%;
  width: 30%;
  border-radius: 10px;
}

.item-check {
  display: none;
  padding: 5rem 0;
}

.item-label {
  display: flex;
  flex: 1;
  border: 1px solid #016956;
  border-radius: 10px;
  padding: 1rem;
  background: #fff;
  margin: 1rem 0;
  gap: 1rem;
  & p {
    margin: 1rem 0;
  }
  & .preco {
    font-weight: bold;
  }
  & img {
    object-fit: cover;
  }
}

.flex-space {
  display: flex;
  justify-content: space-between;
  width: 100%;
  & span:last-child {
    font-weight: 400;
  }
}

.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #016956;
  padding: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.item-check:checked ~ label div {
  background-color: #eff5f0;
  color: #016956;
}

.item-check:checked ~ label .circle .checkmark {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #016956;
}

.add-cupom {
  margin: 20px 0;
}
</style>
