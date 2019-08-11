let startTime = $('.time').text();
let userTyper = $(".user-typer");
let frase = $(".frase").text().replace(/\s+/g, ' ');

$(function () {
    updateFrase();
    startCounter();
    startStopwatch();
    compareText();
    $('.restart-btn').click(restartGame);
});


function updateFrase() {
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

function compareText() {
    userTyper.on('input', function () {
        let typed = userTyper.val();
        let compare = frase.substr(0, typed.length);

        if (typed == compare) {
            userTyper.addClass('green-border');
            userTyper.removeClass('red-border');
        } else {
            userTyper.addClass('red-border');
            userTyper.removeClass('green-border');
        }
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
                userTyper.toggleClass('typer-off');
            }
        }, 1000);
    });
}

function restartGame() {
    userTyper.val('');
    userTyper.attr('disabled', false);
    userTyper.toggleClass('typer-off');
    $('#char-counter').text('0');
    $('#word-counter').text('0');
    $('.time').text(startTime);
    userTyper.removeClass('red-border');
    userTyper.removeClass('green-border');
    startStopwatch();
}