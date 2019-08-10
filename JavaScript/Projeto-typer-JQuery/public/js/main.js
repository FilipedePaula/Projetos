let startTime = $('.time').text();
let userTyper = $(".user-typer");

$(function () {
    updateFrase();
    startCounter();
    startStopwatch();
    $('.restart-btn').click(restartGame);
});


function updateFrase() {
    let frase = $(".frase").text();
    let wordsLength = frase.split(' ').length;
    let wordsAmount = $("#words-amount");

    wordsAmount.text(wordsLength);
}

function startCounter() {

    userTyper.on("input", function () {

        let content = userTyper.val();
        let withoutSpace = content.replace(/\s+/g, '');

        let wordCounter = content.split(/\s+/).length - 1;
        $('#word-counter').text(wordCounter);

        let charCounter = withoutSpace.length;
        $('#char-counter').text(charCounter);
    });
}

function startStopwatch() {
    let time = $('.time').text();

    userTyper.one("focus", function () {

        $('.restart-btn').attr('disabled', true);
        let id = setInterval(function () {
            time--;
            $('.time').text(time);
            if (time < 1) {
                userTyper.attr('disabled', true);
                clearInterval(id);
                $('.restart-btn').attr('disabled', false);
            }
        }, 1000);
    });
}

function restartGame() {
    userTyper.val('');
    userTyper.attr('disabled', false);
    $('#char-counter').text('0');
    $('#word-counter').text('0');
    $('.time').text(startTime);
    startStopwatch();
}