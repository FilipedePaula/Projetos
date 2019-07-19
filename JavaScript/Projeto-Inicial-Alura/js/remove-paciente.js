var tabela = document.querySelector(".corpo-tabela");

tabela.addEventListener("dblclick", function (evento) {

    evento.target.parentNode.classList.add("sumir");

    setTimeout(function () {
        evento.target.parentNode.remove();
    }, 500);
});