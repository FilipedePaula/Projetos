$(".score-btn").click(turnScore);
$('.sync-btn').click(syncScore);

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
    let user = $('#users').val();
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

function syncScore() {
    let score = [];
    let rows = $('tbody>tr');

    rows.each(function () {
        let user = $(this).find('td:nth-child(1)').text();
        let tWords = $(this).find('td:nth-child(2)').text();

        let objectScore = {
            usuario: user,
            pontos: tWords
        }

        score.push(objectScore);
    });

    let data = {
        placar: score
    };

    $.post('http://localhost:3000/placar', data, function () {

        console.log('score successful');
    });
}

function updateScore() {

    $.get('http://localhost:3000/placar', function (data) {

        $(data).each(function () {
            let row = newLine(this.usuario, this.pontos);
            row.find('.delete-btn').click(deleteLine);
            $('tbody').append(row);
        });
    });
}