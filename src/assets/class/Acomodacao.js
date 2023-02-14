export class Acomodacao {
  imagem;
  titulo;
  descricao;

  constructor() {}
  getAcomodacao(e) {
    let acomodacao = e.target.parentNode;

    let nomeImagem = acomodacao.children[1].getAttribute("src").split("/");
    // console.log(nomeImagem[2]);
    let img;
    // img = nomeImagem[2].split(".");
    // this.imagem = img[0] + "." + img[2];
    this.imagem = nomeImagem[2]
    this.titulo = acomodacao.children[0].children[0].innerHTML;
    this.descricao = acomodacao.children[0].children[1].innerHTML;
    // return [this.imagem, this.titulo, this.descricao]
    // console.log(this.descricao);
    this.setDirecionamento();
  }

  setLocalStorage() {
    let dadoAcomodacao = {
      imagem: this.imagem,
      titulo: this.titulo,
      descricao: this.descricao,
    };
    return dadoAcomodacao;
  }

  setDirecionamento() {
    let acomodacao = JSON.stringify(this.setLocalStorage());
    // console.log(acomodacao);
    localStorage.setItem("acomodacao", acomodacao);
    window.location.href = "/avaliacao";
  }

  getLocalStorage() {
    let dados = localStorage.getItem("acomodacao");

    if (dados) {
      let acomodacao = JSON.parse(dados);
      return acomodacao;
    }
  }
}
