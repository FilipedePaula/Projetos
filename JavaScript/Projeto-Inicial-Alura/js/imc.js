var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function (paciente) {

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var resultadoImc = paciente.querySelector(".info-imc");

    if (!(validaPeso(peso))) {
        resultadoImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    } else if (!(validaAltura(altura))) {
        resultadoImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    } else {
        resultadoImc.textContent = calculaIMC(peso, altura);
    }


});

function validaPeso(peso) {

    if (peso <= 0 || peso >= 600) {
        return false;
    } else {
        return true;
    }
}

function validaAltura(altura) {

    if (altura <= 0 || altura >= 3.00) {
        return false
    } else {
        return true;
    }
}

function calculaIMC(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}