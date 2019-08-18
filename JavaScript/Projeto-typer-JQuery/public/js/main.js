let startTime = $('.time').text();
let userTyper = $(".user-typer");

$(function () {
    updateFrase();
    startCounter();
    startStopwatch();
    compareText();
    $('.restart-btn').click(restartGame);
    $('.delete-btn').click(deleteLine);
    updateScore();
    $('#users').selectize({
        create: true,
        sortField: 'text'
    });
    $('.tooltip').tooltipster({
        trigger: 'custom'
    });
});


function updateFrase() {
    let frase = $(".frase").text().replace(/\s+/g, ' ');
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
        let frase = $(".frase").text().replace(/\s+/g, ' ');
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
    userTyper.one("focus", function () {

        let time = $('.time').text();
        $('.restart-btn').attr('disabled', true);
        let id = setInterval(function () {
            time--;
            $('.time').text(time);
            if (time < 1) {
                clearInterval(id);
                endGame();
            }
        }, 1000);
    });
}

function endGame() {
    userTyper.attr('disabled', true);
    $('.restart-btn').attr('disabled', false);
    userTyper.toggleClass('typer-off');
    fillScore();
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

function updateTime(time) {
    startTime = time;
    $('.time').text(time);
}