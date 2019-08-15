$('.frase-btn').click(randomFrase);

function randomFrase() {
    $('.spinner').toggle();

    $.get('http://localhost:3000/frases', changeFrase)
        .fail(function () {
            $('.ajax-error').toggle();
            setTimeout(function () {
                $('.ajax-error').toggle();
            }, 2500);
        })
        .always(function () {
            $('.spinner').toggle();
        });
}

function changeFrase(data) {

    let frase = $('.frase');
    let randomNumber = Math.floor(Math.random() * data.length);

    frase.text(data[randomNumber].texto);

    updateFrase();
    updateTime(data[randomNumber].tempo);
}