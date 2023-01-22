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

// +++++++++++++++++++++++++++JOse Edmar++++++++++++++++++++++++++++++
const servico = {
    cofre: 0,
    lavanderia: 0,
    cafe: 0,
    massagem: 0,
    salaPalestra: 0,
    passeioTuristico: 0,
};

const carrinhoReserva = {
    acomodacao: "",
    dataCheckin: "",
    dataCheckout: "",
    qtdAdulto: 0,
    qtdCrianca: 0,
    subtotal: 0,
    total: 0,
};

// LocalStorage

// localStorage

const selecionar = (seletor) => document.querySelector(seletor);

// const teste = selecionar('[data-checkin]').addEventListener('onfocusout', imprimi)

// carrinhoReserva.dataCheckin = selecionar("[data-checkin]").value
// console.log(selecionar("[data-checkin]").value);
// console.log(carrinhoReserva);

let data_set = ["data-checkout", "data-checkin", "data-qdtA", "data-qdtC"];

function recuperaData() {
    // console.log(selecionar("[data-checkin]"));
    // console.log(selecionar("[data-checkin]").value);
    let dataCheckin, dataCheckout, dataQdtA, dataQdtC;
    dataCheckin = selecionar("[data-checkin]").value;
    dataCheckout = selecionar("[data-checkout]").value;
    // dataQdtA = selecionar(`[${data_set[3]}]`).value
    dataQdtA = selecionar("[data-qdtA]").value;
    // console.log(typeof((parseInt(dataQdtA))))
    // console.log(parseInt(dataQdtA) > 0)
    dataQdtC = selecionar(`[${data_set[3]}]`).value;
    // console.log(dataQdtC);
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

    // mostrar();

    let reserva = JSON.stringify(carrinhoReserva);
    // console.log(reserva);
}
data_set.forEach((item) => {
    let cli = selecionar(`[${item}]`);
    cli.addEventListener("change", recuperaData);
    // cli.addEventListener("focusout", recuperaData);
});


document.querySelectorAll(".container-titulos-acomodacao").forEach((e, i) => {
    e.onchange = function () {
        acomodacao();
    };
});

// Resumo reserva
document.querySelectorAll(".add-servicos-content ul li input").forEach((e) => {
    e.onclick = function () {
        populaServico();
        document.querySelector("#total").innerText = `R$ ${totalAdicionais().toFixed(2)}`;
    };
});

function populaServico() {
    if (document.querySelector("#cofre").checked) {
        servico.cofre = 50;
    } else {
        servico.cofre = 0;
    }
    if (document.querySelector("#lavanderia").checked) {
        servico.lavanderia = 100;
    } else {
        servico.lavanderia = 0;
    }
    if (document.querySelector("#cafe").checked) {
        servico.cafe = 50;
    } else {
        servico.cafe = 0;
    }
    if (document.querySelector("#massagem").checked) {
        servico.massagem = 150;
    } else {
        servico.massagem = 0;
    }
    if (document.querySelector("#salaPalestra").checked) {
        servico.salaPalestra = 350;
    } else {
        servico.salaPalestra = 0;
    }
    if (document.querySelector("#passeioTuristico").checked) {
        servico.passeioTuristico = 250;
    } else {
        servico.passeioTuristico = 0;
    }
}

// Calcular valor Total Acomonações
function totalAdicionais() {
    let tipoAcomocao = carrinhoReserva.acomodacao;
    // console.log(`tipo dentro do tortal: ${tipoAcomocao}`);
    if (tipoAcomocao == "master") {
        return (
            servico.cafe +
            servico.cofre +
            servico.lavanderia +
            servico.massagem +
            servico.passeioTuristico +
            servico.salaPalestra +
            (carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca) * 290
        );
    } else if (tipoAcomocao == "deluxe") {
        return (
            servico.cafe +
            servico.cofre +
            servico.lavanderia +
            servico.massagem +
            servico.passeioTuristico +
            servico.salaPalestra +
            (carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca) * 390
        );
    }
    else {
        return (
            servico.cafe +
            servico.cofre +
            servico.lavanderia +
            servico.massagem +
            servico.passeioTuristico +
            servico.salaPalestra +
            (carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca) * 190
        );
    }
}

// document.querySelectorAll('.add-servicos-content ul li:nth-of-type(1) input[name]')
function populaReserva() {
    document.querySelector(
        ".container-listas li:nth-of-type(1) span"
    ).innerText = carrinhoReserva.acomodacao;
    document.querySelector(
        ".container-listas li:nth-of-type(2) span"
    ).innerText = carrinhoReserva.dataCheckin;
    document.querySelector(
        ".container-listas li:nth-of-type(3) span"
    ).innerText = carrinhoReserva.dataCheckout;
    document.querySelector(
        ".container-listas li:nth-of-type(4) span"
    ).innerText = carrinhoReserva.qtdAdulto + carrinhoReserva.qtdCrianca;
    document.querySelector("#total").innerText = `R$ ${totalAdicionais().toFixed(2)}`;
}

function acomodacao() {
    let standard, master, deluxe;
    standard = document.querySelector("#standard");
    master = document.querySelector("#master");
    deluxe = document.querySelector("#deluxe");
    if (standard.checked) {
        // console.log("standard ativo");
        carrinhoReserva.acomodacao = "standard";
        // mostrar();
        populaReserva();
    }
    if (master.checked) {
        // console.log("master ativo");
        carrinhoReserva.acomodacao = "master";
        // mostrar();
        populaReserva();
    }
    if (deluxe.checked) {
        // console.log("deluxe ativo");
        carrinhoReserva.acomodacao = "deluxe";
        // mostrar();
        populaReserva();
    }
}

// document.querySelector('.container-listas li:nth-of-type(4) span').innerText = '4'
// Adicionar local
let servicoString = JSON.stringify(servico)
console.log(typeof(servicoString));
console.log(typeof(servico));
localStorage.setItem('reserva', JSON.stringify(servico))
