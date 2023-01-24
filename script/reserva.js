const buttonServices = document.querySelector(".btn-add-servicos");
const servicesContent = document.querySelector(".add-servicos-content");
const buttonModal = document.querySelector(".btn");
const modal = document.querySelector(".modal-wrapper");

buttonModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

modal.addEventListener("click", (e) => {
    // console.log(e.target);
    const className = ["modal-wrapper", "close-button"];
    const classNameOfClickedElement = e.target.classList[0];
    const shouldClose = className.some(
        (className) => className === classNameOfClickedElement
    );
    if (shouldClose) {
        modal.style.display = "none";
    }
});

const showItens = (e) => {
    e.preventDefault();

    servicesContent.classList.toggle("hide");
};

buttonServices.addEventListener("click", showItens);
buttonModal.addEventListener("click", () => {
    populaModal();
    console.log("modal");
});
// const itemRoom = document.querySelectorAll(".item-label");
// const formReserva = document.querySelector("[data-reserva='form-reserva']");

// const rooms = [
//     {
//         id: 1,
//         title: "Standard",
//         price: 190,
//         description:
//             "A acomodação standard é um quarto confortável e funcional, ideal para aqueles que procuram um lugar para descansar durante a viagem. O quarto possui uma cama queen size ou duas camas de solteiro, mesa de trabalho, TV a cabo, ar-condicionado e banheiro privativo.",
//         image: "../public/assets/images/acomodacoes/standard/standard1.png",
//     },
//     {
//         id: 2,
//         title: "Master",
//         price: 290,
//         description:
//             "A acomodação master é um quarto luxuoso e espaçoso, projetado para oferecer aos hóspedes o máximo conforto e privacidade. O quarto possui uma cama king size, sofá-cama, TV de tela  plana, ar-condicionado e banheiro privativo com banheira de hidromassagem.",
//         image: "../public/assets/images/acomodacoes/master/master.jpg",
//     },
//     {
//         id: 3,
//         title: "Deluxe",
//         price: 390,
//         description:
//             " A acomodação deluxe é um quarto de categoria superior, projetado para proporcionar aos hóspedes uma estadia luxuosa e                                                confortável. O quarto possui uma cama king size ou duas camas queen size, TV de tela plana, ar-condicionado, banheiro privativo com chuveiro de hidromassagem e uma varanda privativa com vista panorâmica para o mar.",
//         image: "../public/assets/images/acomodacoes/deluxe/luxo1.jpg",
//     },
// ];

// const populateItems = rooms.map(({title, price, description, image}) => {
//     console.log(title, price);
//     const room = `<div>
//         <div class="flex">
//             <span class="circle">
//               <span class="checkmark"></span>
//             </span>
//             <h3>${title}</h3>
//         </div>
//         <p>${description}</p>
//         <p class="preco">R$ ${price},00</p>
//         </div>
//         <img
//             src="${image}"
//             alt="${title}"
//         />
//         `;

//     return room;
// });

// itemRoom.forEach((item, index) => {
//     item.innerHTML += populateItems[index];
// });

// const getRoom = (description) => {
//     const item = rooms.filter(({title}) => title === description);

//     return item;
// };
// console.log(getRoom("Master"));

// formReserva.addEventListener("change", (e) => {
//     if (e.target.checked) {
//         getRoom(e.target.value);
//         const reserva = getRoom(e.target.value);
//         console.log(reserva[0].price);
//     }
// });

// const buttonServices = document.querySelector(".btn-add-servicos");
// const servicesContent = document.querySelector(".add-servicos-content");
// const buttonModal = document.querySelector(".btn");
// const modal = document.querySelector(".modal-wrapper");

// buttonModal.addEventListener("click", () => {
//     modal.style.display = "flex";
// });

// modal.addEventListener("click", (e) => {
//     // console.log(e.target);
//     const className = ["modal-wrapper", "close-button"];
//     const classNameOfClickedElement = e.target.classList[0];
//     const shouldClose = className.some(
//         (className) => className === classNameOfClickedElement
//     );
//     if (shouldClose) {
//         modal.style.display = "none";
//     }
// });

// const showItens = (e) => {
//     e.preventDefault();
//     servicesContent.classList.toggle("hide");
// };

// buttonServices.addEventListener("click", showItens);

// +++++++++++++++++++++++++++JOse Edmar++++++++++++++++++++++++++++++

const carrinhoReserva = {
    acomodacao: "",
    dataCheckin: "",
    dataCheckout: "",
    qtdAdulto: 0,
    qtdCrianca: 0,
    cofre: 0,
    lavanderia: 0,
    cafe: 0,
    massagem: 0,
    salaPalestra: 0,
    passeioTuristico: 0,
    subtotal: 0,
    total: 0,
};

// função para selecionar campos no HTML com JS
const selecionar = (seletor) => document.querySelector(seletor);

let data_set = ["data-checkout", "data-checkin", "data-qdtA", "data-qdtC"];

// Pegar informações de reservas
function recuperaData() {
    let dataCheckin, dataCheckout, dataQdtA, dataQdtC;
    dataCheckin = selecionar("[data-checkin]").value;
    dataCheckout = selecionar("[data-checkout]").value;
    dataQdtA = selecionar("[data-qdtA]").value;
    dataQdtC = selecionar(`[${data_set[3]}]`).value;
    if (dataCheckin !== "") {
        carrinhoReserva.dataCheckin = dataCheckin;
        populaReserva();
    }
    if (dataCheckout !== "") {
        carrinhoReserva.dataCheckout = dataCheckout;
        populaReserva();
    }
    if (parseInt(dataQdtA) > 0) {
        carrinhoReserva.qtdAdulto = parseInt(dataQdtA);
        populaReserva();
    }
    if (parseInt(dataQdtC) > 0) {
        carrinhoReserva.qtdCrianca = parseInt(dataQdtC);
        populaReserva();
    }
}

// Adicionar evento ao selecionar campos minha reserva
data_set.forEach((item) => {
    let cli = selecionar(`[${item}]`);
    cli.addEventListener("change", recuperaData);
    // cli.addEventListener("focusout", recuperaData);
});

// Criar evento para tipos acomodações
document.querySelectorAll(".container-titulos-acomodacao").forEach((e) => {
    e.onchange = function () {
        acomodacao();
    };
});

// Resumo reserva
document.querySelectorAll(".add-servicos-content ul li input").forEach((e) => {
    e.onclick = function () {
        populaServico();
        carrinhoReserva.total = totalAdicionais().toFixed(2);
        selecionar("#total").innerText = `R$ ${totalAdicionais().toFixed(2)}`;
    };
});

// Preenher Objeto carrinhoReserva com dados dos serviços adicionais
function populaServico() {
    if (selecionar("#cofre").checked) {
        carrinhoReserva.cofre = 50;
    } else {
        carrinhoReserva.cofre = 0;
    }
    if (selecionar("#lavanderia").checked) {
        carrinhoReserva.lavanderia = 100;
    } else {
        carrinhoReserva.lavanderia = 0;
    }
    if (selecionar("#cafe").checked) {
        carrinhoReserva.cafe = 50;
    } else {
        carrinhoReserva.cafe = 0;
    }
    if (selecionar("#massagem").checked) {
        carrinhoReserva.massagem = 150;
    } else {
        carrinhoReserva.massagem = 0;
    }
    if (selecionar("#salaPalestra").checked) {
        carrinhoReserva.salaPalestra = 350;
    } else {
        carrinhoReserva.salaPalestra = 0;
    }
    if (selecionar("#passeioTuristico").checked) {
        carrinhoReserva.passeioTuristico = 250;
    } else {
        carrinhoReserva.passeioTuristico = 0;
    }
}

// Calcular valor Total Acomonações
function totalAdicionais() {
    let tipoAcomocao = carrinhoReserva.acomodacao;
    if (tipoAcomocao == "master") {
        return (
            carrinhoReserva.cafe +
            carrinhoReserva.cofre +
            carrinhoReserva.lavanderia +
            carrinhoReserva.massagem +
            carrinhoReserva.passeioTuristico +
            carrinhoReserva.salaPalestra +
            (carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca) * 290
        );
    } else if (tipoAcomocao == "deluxe") {
        return (
            carrinhoReserva.cafe +
            carrinhoReserva.cofre +
            carrinhoReserva.lavanderia +
            carrinhoReserva.massagem +
            carrinhoReserva.passeioTuristico +
            carrinhoReserva.salaPalestra +
            (carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca) * 390
        );
    } else {
        carrinhoReserva.acomodacao = "standard";
        return (
            carrinhoReserva.cafe +
            carrinhoReserva.cofre +
            carrinhoReserva.lavanderia +
            carrinhoReserva.massagem +
            carrinhoReserva.passeioTuristico +
            carrinhoReserva.salaPalestra +
            (carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca) * 190
        );
    }
}

// preencher html de resumo da reserva com informações da reserva
function populaReserva() {
    selecionar(".container-listas li:nth-of-type(1) span").innerText =
        carrinhoReserva.acomodacao;
    selecionar(".container-listas li:nth-of-type(2) span").innerText =
        carrinhoReserva.dataCheckin;
    selecionar(".container-listas li:nth-of-type(3) span").innerText =
        carrinhoReserva.dataCheckout;
    selecionar(".container-listas li:nth-of-type(4) span").innerText =
        carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca;
    selecionar("#total").innerText = `R$ ${totalAdicionais().toFixed(2)}`;
    carrinhoReserva.total = totalAdicionais().toFixed(2);
}

// test
function populaModal() {
    const test = (selecionar(".test").innerText = carrinhoReserva.acomodacao);
    console.log(test);
    // selecionar(".container-listas li:nth-of-type(2) span").innerText =
    //     carrinhoReserva.dataCheckin;
    // selecionar(".container-listas li:nth-of-type(3) span").innerText =
    //     carrinhoReserva.dataCheckout;
    // selecionar(".container-listas li:nth-of-type(4) span").innerText =
    //     carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca;
    // selecionar("#total").innerText = `R$ ${totalAdicionais().toFixed(2)}`;
    // carrinhoReserva.total = totalAdicionais().toFixed(2);
}
// end test

// Função para preencher objeto  com tipo de acomodação
function acomodacao() {
    if (selecionar("#standard").checked) {
        carrinhoReserva.acomodacao = "standard";
        populaReserva();
    }
    if (selecionar("#master").checked) {
        carrinhoReserva.acomodacao = "master";
        populaReserva();
    }
    if (selecionar("#deluxe").checked) {
        carrinhoReserva.acomodacao = "deluxe";
        populaReserva();
    }
}

let reserva = JSON.stringify(carrinhoReserva);
console.log(reserva);

document.querySelector(".container-listas li:nth-of-type(4) span").innerText =
    "4";
// Adicionar local
// let servicoString = JSON.stringify(servico);
// console.log(typeof servicoString);
// console.log(typeof servico);
// localStorage.setItem("reserva", JSON.stringify(servico));
