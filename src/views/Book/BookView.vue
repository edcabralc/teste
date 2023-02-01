<template>
    <MainHeader />
    <main class="main-reserva">
        <section class="home-hero cover-background">
            <h1 class="hero-title">Reserve uma de nossas acomodações</h1>
        </section>
        <section class="section">
            <div class="container">
                <div class="right-reserva">
                    <div class="card-inputs">
                        <div>
                            <h2>Minha reserva</h2>
                            <p>
                                Informe a data de entrada, a saída e a
                                quantidade de pessoas.
                            </p>
                        </div>
                        <div class="input-group">
                            <label for="datacheckin">Data check-in:</label>
                            <input
                                type="date"
                                class="input-text-primary"
                                data-checkin="datacheckin"
                            />
                        </div>
                        <div class="input-group">
                            <label for="datacheckout">Data check-out:</label>
                            <input
                                type="date"
                                class="input-text-primary"
                                data-checkout="datacheckout"
                            />
                        </div>
                        <div class="input-group">
                            <label for="qtde_adultos">Adultos:</label>
                            <input
                                type="number"
                                max="2"
                                class="input-text-primary"
                                data-qdtA="adultos"
                            />
                        </div>
                        <div class="input-group">
                            <label for="qtde_criancas">Crianças:</label>
                            <input
                                type="number"
                                max="2"
                                class="input-text-primary"
                                data-qdtC="criancas"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <section class="secao-tipo-acomodacao">
                    <div class="container-tipo-acomodacao">
                        <h2>Escolha o tipo de acomodação</h2>
                        <div class="container-titulos-acomodacao">
                            <input
                                class="item-check"
                                type="radio"
                                name="acomodacao"
                                id="standard"
                                checked
                            />
                            <label for="standard">
                                <div class="item-label">
                                    <div>
                                        <div class="flex">
                                            <span class="circle">
                                                <span class="checkmark"></span>
                                            </span>
                                            <h3>Standard</h3>
                                        </div>
                                        <p>
                                            A acomodação standard é um quarto
                                            confortável e funcional, ideal para
                                            aqueles que procuram um lugar para
                                            descansar durante a viagem. O quarto
                                            possui uma cama queen size ou duas
                                            camas de solteiro, mesa de trabalho,
                                            TV a cabo, ar-condicionado e
                                            banheiro privativo.
                                        </p>
                                        <p class="preco">R$190,00</p>
                                    </div>
                                    <img
                                        src="@/assets/images/acomodacoes/standard/standard1.png"
                                        alt=""
                                    />
                                </div>
                            </label>
                        </div>

                        <div class="container-titulos-acomodacao">
                            <input
                                class="item-check"
                                type="radio"
                                name="acomodacao"
                                id="master"
                            />
                            <label for="master">
                                <div class="item-label">
                                    <div>
                                        <div class="flex">
                                            <span class="circle">
                                                <span class="checkmark"></span>
                                            </span>
                                            <h3>Master</h3>
                                        </div>
                                        <p>
                                            A acomodação master é um quarto
                                            luxuoso e espaçoso, projetado para
                                            oferecer aos hóspedes o máximo
                                            conforto e privacidade. O quarto
                                            possui uma cama king size,
                                            sofá-cama, TV de tela plana,
                                            ar-condicionado e banheiro privativo
                                            com banheira de hidromassagem.
                                        </p>
                                        <p class="preco">R$290,00</p>
                                    </div>
                                    <img
                                        src="@/assets/images/acomodacoes/master/master.jpg"
                                        alt=""
                                    />
                                </div>
                            </label>
                        </div>

                        <div class="container-titulos-acomodacao">
                            <input
                                class="item-check"
                                type="radio"
                                name="acomodacao"
                                id="deluxe"
                            />
                            <label for="deluxe">
                                <div class="item-label">
                                    <div>
                                        <div class="flex">
                                            <span class="circle">
                                                <span class="checkmark"></span>
                                            </span>
                                            <h3>Deluxe</h3>
                                        </div>
                                        <p>
                                            A acomodação deluxe é um quarto de
                                            categoria superior, projetado para
                                            proporcionar aos hóspedes uma
                                            estadia luxuosa e confortável. O
                                            quarto possui uma cama king size ou
                                            duas camas queen size, TV de tela
                                            plana, ar-condicionado, banheiro
                                            privativo com chuveiro de
                                            hidromassagem e uma varanda
                                            privativa com vista panorâmica para
                                            o mar.
                                        </p>
                                        <p class="preco">R$390,00</p>
                                    </div>
                                    <img
                                        src="@/assets/images/acomodacoes/deluxe/luxo1.jpg"
                                        alt=""
                                    />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="container-resumo-reserva">
                        <h2>Resumo da reserva</h2>
                        <div class="container-listas">
                            <ul>
                                <li>Acomodação: <span></span></li>
                                <li>Check-in: <span></span></li>
                                <li>Check-out: <span></span></li>
                                <li>Pessoas: <span></span></li>
                            </ul>

                            <div class="add-servicos">
                                <span>
                                    <a href="" class="btn-add-servicos">
                                        Adicionar mais serviços
                                    </a>
                                </span>
                                <div class="add-servicos-content">
                                    <ul>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="cofre"
                                                id="cofre"
                                            />
                                            Cofre <span>R$ 50,00</span>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="lavanderia"
                                                id="lavanderia"
                                            />
                                            Lavanderia
                                            <span>R$ 100,00</span>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="cafe"
                                                id="cafe"
                                            />
                                            Café no quarto
                                            <span>R$ 50,00</span>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="massagem"
                                                id="massagem"
                                            />
                                            Massagem <span>R$ 150,00</span>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="salaPalestra"
                                                id="salaPalestra"
                                            />
                                            Sala para palestra
                                            <span>R$ 350,00</span>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                name="passeioTuristico"
                                                id="passeioTuristico"
                                            />
                                            Passeio turístico
                                            <span>R$ 250,00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <ul>
                                <li>Subtotal:</li>
                                <li>Total: <span id="total"></span></li>
                            </ul>
                        </div>

                        <a class="btn" href="#">Continuar</a>
                    </div>
                </section>
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
    <MainFooter />
</template>

<script>
import MainFooter from "@/components/MainFooter.vue";
import MainHeader from "@/components/MainHeader.vue";

export default {
    name: "RoomView",
    components: {
        MainHeader,
        MainFooter,
    },
};
</script>

<style src="./style.scss" lang="scss" scoped />
