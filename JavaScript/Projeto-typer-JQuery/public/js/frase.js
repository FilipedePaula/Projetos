$('.frase-btn').click(randomFrase);
$('.frase-id-btn').click(fraseById);

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

function fraseById() {
    $('.spinner').toggle();

    let fraseId = $('#frase-id').val();
    let data = {
        id: fraseId
    };

    $.get('http://localhost:3000/frases', data, changeById)
        .fail(function () {
            $('.ajax-error').toggle();
            setTimeout(function () {
                $('.ajax-error').toggle();
            }, 2500);
        })
        .always(function () {
            $('.spinner').toggle();
        });;
}

function changeById(dataset) {
    var frase = $('.frase');

    frase.text(dataset.texto);
    updateFrase();
    updateTime(dataset.tempo);
}