$(".score-btn").click(turnScore);

function newLine(user, totalWords) {
    let line = $('<tr>');
    let name = $('<td>').text(user);
    let words = $('<td>').text(totalWords);
    let deleteBtn = $('<td>');

    let link = $('<a>').addClass('delete-btn').attr('href', '#');
    let icon = $('<i>').addClass('material-icons').addClass('icons').text('delete');

    link.append(icon);
    deleteBtn.append(link);

    line.append(name);
    line.append(words);
    line.append(deleteBtn);

    return line;
}

function fillScore() {
    let score = $('.score').find('tbody');
    let user = 'Filipe';
    let totalWords = $('#word-counter').text();

    let line = newLine(user, totalWords);

    line.find('.delete-btn').click(deleteLine);

    score.append(line);

    $('.score').slideDown(600);
    scrollScore();

}

function deleteLine(event) {
    event.preventDefault();
    line = $(this).parent().parent();
    line.fadeOut(1000);

    setTimeout(function () {
        line.remove();
    }, 1000);
}

function turnScore() {
    $('.score').stop().slideToggle(600);
}

function scrollScore() {
    let scorePosition = $('.score').offset().top;

    $('html').animate({
        scrollTop: scorePosition + 'px'
    }, 1000);
}