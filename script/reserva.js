const buttonServices = document.querySelector(".btn-add-servicos");
const servicesContent = document.querySelector(".add-servicos-content");
const buttonModal = document.querySelector(".btn");
const modal = document.querySelector(".modal-wrapper");
// const acomodacao = document.querySelector('".container-listas li:nth-of-type(1) span"');

// modal.style.display = "flex";
buttonModal.addEventListener("click", () => {
    modal.style.display = "flex";
    htmlModal(carrinhoReserva);
    addLocalStorage();
});
// btn_Modal.addEventListener("click", showItens);

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
        document.querySelector(".modal-reserva img").src =
            "../public/assets/images/acomodacoes/standard/standard1.png";
        populaReserva();
    }
    if (selecionar("#master").checked) {
        carrinhoReserva.acomodacao = "master";
        document.querySelector(".modal-reserva img").src =
            "../public/assets/images/acomodacoes/master/master.jpg";
        populaReserva();
    }
    if (selecionar("#deluxe").checked) {
        carrinhoReserva.acomodacao = "deluxe";
        document.querySelector(".modal-reserva img").src =
            "../public/assets/images/acomodacoes/deluxe/luxo1.jpg";
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

function htmlModal() {
    let uL = document.querySelector(".modal-carrinho ul");
    document.querySelectorAll(".modal-carrinho ul").length > 0
        ? document.querySelector(".modal-carrinho").removeChild(uL)
        : "";

    let div = document.querySelector(".modal-carrinho");
    var ul = document.createElement("ul");
    div.appendChild(ul);
    var li = document.createElement("li");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var span = document.createElement("span");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    var span4 = document.createElement("span");
    span.innerText = `Tipo acomodação: ${carrinhoReserva.acomodacao}`;
    span1.innerText = `Chechin: ${carrinhoReserva.dataCheckin}`;
    span2.innerText = `Chechin: ${carrinhoReserva.dataCheckout}`;
    span3.innerText = `Pesoas: ${
        carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca
    }`;
    span4.innerText = `Total: ${carrinhoReserva.total}`;
    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    li.appendChild(span);
    li1.appendChild(span1);
    li2.appendChild(span2);
    li3.appendChild(span3);
    Object.keys(carrinhoReserva.servicos).forEach((item) => {
        if (carrinhoReserva.servicos[item] !== 0) {
            var li = document.createElement("li");
            ul.appendChild(li);
            let span = document.createElement("span");
            span.innerText = `${item} - valor: R$ ${carrinhoReserva.servicos[item]}`;
            li.appendChild(span);
        }
    });
    ul.appendChild(li4);
    li4.appendChild(span4);
}

function addLocalStorage() {
    let carrinho = JSON.stringify(carrinhoReserva);

    localStorage.setItem("carrinhoReserva", carrinho);
}

function recuperaLocalStorage(){
    let carrinho =localStorage.getItem('carrinhoReserva')
    if(carrinho){
        let dadoReserva = JSON.parse(carrinho)
        console.log(dadoReserva);
    }
    // carrinho  ? console.log(carrinho) : console.log('vazio');
    // console.log(carrinho);
}