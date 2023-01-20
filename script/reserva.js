const buttonServices = document.querySelector(".btn-add-servicos");
const servicesContent = document.querySelector(".add-servicos-content");
const buttonModal = document.querySelector(".btn");
const modal = document.querySelector(".modal-wrapper");

buttonModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

modal.addEventListener("click", (e) => {
    console.log(e.target);
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

// function carrinhoReserva(dataChichin, dataCheckout, qtdAdulto, qdtCrianca) {

// }

const carrinhoReserva = {
    dataCheckin: "",
    dataCheckout: "",
    qtdAdulto: 0,
    qtdCrianca: 0,
    subtotal: 0,
    total: 0,
    adcionais: [],
};
const selecionar = (seletor) => document.querySelector(seletor);

// const teste = selecionar('[data-checkin]').addEventListener('onfocusout', imprimi)

// carrinhoReserva.dataCheckin = selecionar("[data-checkin]").value
// console.log(selecionar("[data-checkin]").value);
// console.log(carrinhoReserva);

function imprimir(){
    // console.log('Entrei');
    console.log(selecionar("[data-checkin]"));
    // console.log(selecionar("[data-checkin]").value);
}
var cli = selecionar("[data-checkin]")
cli.addEventListener('onfocusout', imprimir)
// onfocusout="imprimir()"

// const i = selecionar("[data-checkin]")
// i.addEventListener('onfocusout', imprimir)