var botaoAdicionar = document.querySelector("#botao-adicionar");

botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var paciente = obtemPaciente(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {

        exibeErros(erros);
        return;
    }

    montaPaciente(paciente);

    form.reset();

    var msgErro = document.querySelector(".mensagens-erro");
    msgErro.innerHTML = "";

});

function montaPaciente(paciente) {

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector(".tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function exibeErros(erros) {

    var ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPaciente(form) {

    var paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Campo nome requerido");
    }
    if (paciente.gordura.length == 0) {
        erros.push("Campo gordura requerido");
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }
    return erros;
}