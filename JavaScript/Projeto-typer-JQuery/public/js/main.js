let frase = $(".frase").text();
let wordsLength = frase.split(' ').length;
let wordsAmount = $("#words-amount");

wordsAmount.text(wordsLength);

let userTyper = $(".user-typer");

userTyper.on("input", function () {

    let content = userTyper.val();
    let withoutSpace = content.replace(/\s+/g, '');

    let wordCounter = content.split(/\s+/).length - 1;
    $('#word-counter').text(wordCounter);

    let charCounter = withoutSpace.length;
    $('#char-counter').text(charCounter);
});

let time = $('.time').text();

userTyper.one("focus", function () {

    let id = setInterval(function () {
        time--;
        $('.time').text(time);
        if (time < 1) {
            userTyper.attr('disabled', true);
            clearInterval(id);
        }
    }, 1000);
});