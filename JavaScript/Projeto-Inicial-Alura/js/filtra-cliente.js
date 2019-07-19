var campoFiltro = document.querySelector("#campo-busca");

campoFiltro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        pacientes.forEach(function (paciente) {

            var nome = paciente.querySelector(".info-nome").textContent;
            var input = campoFiltro.value;

            var busca = new RegExp(input, "i");

            if (!(busca.test(nome))) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });

    } else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove("invisivel");
        });
    }
});