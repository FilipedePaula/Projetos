var botaoCep = document.querySelector(".botao-cep");

botaoCep.addEventListener("click", function (event) {
    event.preventDefault();

    buscaCep();
});

function buscaCep() {

    let inputCep = document.querySelector(".campo-form[name=cep]");
    let cep = inputCep.value.replace('-', '');
    let url = 'http://viacep.com.br/ws/' + cep + '/json';

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {

                preencheCampos(JSON.parse(xhr.responseText));

            }
        }
    }

    xhr.send();
}

function preencheCampos(json) {

    document.querySelector(".campo-form[name=endereco]").value = json.logradouro;
    document.querySelector(".campo-form[name=bairro]").value = json.bairro;
    document.querySelector(".campo-form[name=complemento]").value = json.complemento;
    document.querySelector(".campo-form[name=cidade]").value = json.localidade;
    document.querySelector(".campo-form[name=estado]").value = json.uf;
}