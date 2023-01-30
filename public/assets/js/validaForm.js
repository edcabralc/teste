const password = "123456";
const email = "edmar.ade@gmail.com";

function validarFormulario() {
    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;
    login = login.replace(/"|\s|'/g, "").trim();

    if (!login.length == 0 && !senha.length == 0) {
        if (login == email && senha == password) {
            localStorage.clear();
            let key = "Email";
            localStorage.setItem(key, login);
            return true;
        } else {
            alert("Verificar login/senha");
            return false;
        }
    } else {
        alert("Preencher todos os campos.");
        return false;
    }
}

function saudacao() {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            // console.log(key, value);
            alert(`Olá ${value}, seja bem vindo(a)!`);
        }
    }
}
