<template>
    <div>
        <main class="main-reserva">
            <section class="home-hero cover-background">
                <h1 class="hero-title">{{ titleHero }}</h1>
            </section>
            <section class="section">
                <div class="container">
                    <div class="right-reserva">
                        <div class="card-inputs">
                            <div>
                                <h2>{{ titleMinhaReserva }}</h2>
                                <p>{{ paragraphMinhaReserva }}</p>
                            </div>
                            <div class="input-group">
                                <label for="datacheckin">Data check-in:</label>
                                <input type="date" v-model="dataCheckIn" class="input-text-primary" data-checkin="datacheckin" />
                                <!-- " @change="getDataCheckIn -->
                            </div>
                            <div class="input-group">
                                <label for="datacheckout">Data check-out:</label>
                                <input type="date" v-model="dataCheckout" class="input-text-primary" data-checkout="datacheckout" />
                            </div>
                            <div class="input-group">
                                <label for="qtde_adultos">Adultos:</label>
                                <input type="number" @change="totalPessoasAcomodacao" v-model="adulto" max="10" min="0" class="input-text-primary" data-qdtA="adultos" />
                            </div>
                            <div class="input-group">
                                <label for="qtde_criancas">Crianças:</label>
                                <input type="number" @change="totalPessoasAcomodacao" v-model="crianca" max="10" min="0" class="input-text-primary" data-qdtC="criancas" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="container-tipo-acomodacao">
                        <h2>{{ titleH2 }}</h2>
                        <div v-for="({id, checked, title, price, paragraph, src}, index) in rooms" @click="getItem(rooms, id)" class="container-titulos-acomodacao" :key="index">
                            <input class="item-check" type="radio" name="acomodacao" :id="title" :value="title" :checked="!checked" />
                            <label :for="title">
                                <div class="item-label">
                                    <div>
                                        <div class="flex">
                                            <span class="circle" @click="getAcomodacao(title, price)">
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
                                <li>
                                    Acomodação: <span>{{ acomodacao }}</span>
                                </li>
                                <li>
                                    Check-in: <span>{{ dataCheckIn }}</span>
                                </li>
                                <li>
                                    Check-out: <span>{{ dataCheckout }}</span>
                                </li>
                                <li>
                                    Pessoas: <span>{{ totalPessoas }}</span>
                                </li>
                            </ul>

                            <div class="add-servicos">
                                <span>
                                    <a href="" class="btn-add-servicos"> Adicionar mais serviços </a>
                                </span>
                                <div class="add-servicos-content">
                                    <ul>
                                        <li>
                                            <input type="checkbox" name="cofre" id="cofre" />
                                            Cofre <span>R$ 50,00</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="lavanderia" id="lavanderia" />
                                            Lavanderia
                                            <span>R$ 100,00</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="cafe" id="cafe" />
                                            Café no quarto
                                            <span>R$ 50,00</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="massagem" id="massagem" />
                                            Massagem <span>R$ 150,00</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="salaPalestra" id="salaPalestra" />
                                            Sala para palestra
                                            <span>R$ 350,00</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="passeioTuristico" id="passeioTuristico" />
                                            Passeio turístico
                                            <span>R$ 250,00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <ul>
                                <li>
                                    Subtotal:<span> R$: {{ subtotal }}</span>
                                </li>
                                <li>Total: <span id="total"></span></li>
                            </ul>
                        </div>

                        <a class="btn" href="#">Continuar</a>
                    </div>
                </div>
            </section>
            <!-- <div class="modal-wrapper">Resumo da reserva
                <div class="modal">
                    <span class="close-button">X</span>
                    <div class="modal-content">
                        <h3>Resumo da reserva</h3>
                        <div>
                            <div class="modal-reserva">
                                <div>
                                    <img
                                        src="https://picsum.photos/id/598/600/400"
                                        alt=""
                                    />
                                </div>
                                <div class="modal-carrinho">
                                    
                                </div>
                            <div class="btn">Reservar</div>
                        </div>
                    </div>
                </div>
            </div> -->
        </main>
    </div>
</template>

<script>
import {rooms} from "../helpers/dataRooms";

export default {
    name: "ListRoom",
    data() {
        return {
            titleHero: "Reserve uma de nossas acomodações",
            titleH2: "Escolha o tipo de acomodação",
            titleMinhaReserva: "Minha reserva",
            paragraphMinhaReserva: "Informe a data de entrada, a saída e a quantidade de pessoas.",
            rooms,
            acomodacao: "",
            subtotal: "",
            dataCheckIn: "",
            dataCheckout: "",
            adulto: "",
            crianca: "",
            totalPessoas: "",
        };
    },
    methods: {
        onToggle: (elem) => (elem = !elem),
        getItem: (arr, id) => {
            arr.filter((item, index, arrr) => {
                if (item.id == id) {
                    // console.log(item);
                }
            });
        },
        getAcomodacao(title, price) {
            // console.log(title, price);
            this.acomodacao = title;
            this.subtotal = parseInt(price).toFixed(2);
        },
    },
    computed: {
        test: () => getItem(rooms, id),
        totalPessoasAcomodacao() {
            let pAdulto = this.adulto ? parseInt(this.adulto) : 0;
            let pInfantil = this.crianca ? parseInt(this.crianca) : 0;
            return (this.totalPessoas = pAdulto + pInfantil);
        },
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

.item-label img {
    object-fit: cover;
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
</style>
