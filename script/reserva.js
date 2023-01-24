const buttonServices = document.querySelector(".btn-add-servicos");
const servicesContent = document.querySelector(".add-servicos-content");
const buttonModal = document.querySelector(".btn");
const modal = document.querySelector(".modal-wrapper");
// const acomodacao = document.querySelector('".container-listas li:nth-of-type(1) span"');

// modal.style.display = "flex";
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

// +++++++++++++++++++++++++++JOse Edmar++++++++++++++++++++++++++++++

const carrinhoReserva = {
    acomodacao: "",
    dataCheckin: "",
    dataCheckout: "",
    qtdAdulto: 0,
    qtdCrianca: 0,
    servicos: {
        cofre: 0,
        lavanderia: 0,
        cafe: 0,
        massagem: 0,
        salaPalestra: 0,
        passeioTuristico: 0,
    },
    // cofre: 0,
    // lavanderia: 0,
    // cafe: 0,
    // massagem: 0,
    // salaPalestra: 0,
    // passeioTuristico: 0,
    subtotal: 0,
    total: 0,
};

//função para selecionar campos no HTML com JS
const selecionar = (seletor) => document.querySelector(seletor);

let data_set = ["data-checkout", "data-checkin", "data-qdtA", "data-qdtC"];

//Pegar informações de reservas
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

//Adicionar evento ao selecionar campos minha reserva
data_set.forEach((item) => {
    let cli = selecionar(`[${item}]`);
    cli.addEventListener("change", recuperaData);
    // cli.addEventListener("focusout", recuperaData);
});

//Criar evento para tipos acomodações
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
        carrinhoReserva.servicos.cofre = 50;
    } else {
        carrinhoReserva.servicos.cofre = 0;
    }
    if (selecionar("#lavanderia").checked) {
        carrinhoReserva.servicos.lavanderia = 100;
    } else {
        carrinhoReserva.servicos.lavanderia = 0;
    }
    if (selecionar("#cafe").checked) {
        carrinhoReserva.servicos.cafe = 50;
    } else {
        carrinhoReserva.servicos.cafe = 0;
    }
    if (selecionar("#massagem").checked) {
        carrinhoReserva.servicos.massagem = 150;
    } else {
        carrinhoReserva.servicos.massagem = 0;
    }
    if (selecionar("#salaPalestra").checked) {
        carrinhoReserva.servicos.salaPalestra = 350;
    } else {
        carrinhoReserva.servicos.salaPalestra = 0;
    }
    if (selecionar("#passeioTuristico").checked) {
        carrinhoReserva.servicos.passeioTuristico = 250;
    } else {
        carrinhoReserva.servicos.passeioTuristico = 0;
    }
}

// Calcular valor Total Acomonações
function totalAdicionais() {
    let tipoAcomocao = carrinhoReserva.acomodacao;
    if (tipoAcomocao == "master") {
        return (
            carrinhoReserva.servicos.cafe +
            carrinhoReserva.servicos.cofre +
            carrinhoReserva.servicos.lavanderia +
            carrinhoReserva.servicos.massagem +
            carrinhoReserva.servicos.passeioTuristico +
            carrinhoReserva.servicos.salaPalestra +
            (carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca) * 290
        );
    } else if (tipoAcomocao == "deluxe") {
        return (
            carrinhoReserva.servicos.cafe +
            carrinhoReserva.servicos.cofre +
            carrinhoReserva.servicos.lavanderia +
            carrinhoReserva.servicos.massagem +
            carrinhoReserva.servicos.passeioTuristico +
            carrinhoReserva.servicos.salaPalestra +
            (carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca) * 390
        );
    } else {
        carrinhoReserva.acomodacao = "standard";
        return (
            carrinhoReserva.servicos.cafe +
            carrinhoReserva.servicos.cofre +
            carrinhoReserva.servicos.lavanderia +
            carrinhoReserva.servicos.massagem +
            carrinhoReserva.servicos.passeioTuristico +
            carrinhoReserva.servicos.salaPalestra +
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
// console.log(reserva);

// document.querySelector('.container-listas li:nth-of-type(4) span').innerText = '4'
// Adicionar local
// let servicoString = JSON.stringify(servico);
// console.log(typeof servicoString);
// console.log(typeof servico);
// localStorage.setItem("reserva", JSON.stringify(servico));

function criarHTML() {
    let div = document.querySelector(".ulmodal");
    var ul = document.createElement("ul");
    div.appendChild(ul);
    ul.appendChild(li);
    // carrinhoReserva.servicos.forEach((e, i) => {
    //     // var li = document.createElement('li')
    //     console.log(e, i);

    // })
    // for(let key of carrinhoReserva){
    //     console.log(key);
    // }
}

// function adcElemento () {
//     // cria um novo elemento div
//     // e dá à ele conteúdo
//     var divNova = document.createElement("div");
//     var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
//     divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

//     // adiciona o novo elemento criado e seu conteúdo ao DOM
//     var divAtual = document.getElementById("div1");
//     document.body.insertBefore(divNova, divAtual);
//   }

criarHTML();
