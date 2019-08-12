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

    score.prepend(line);

}

function deleteLine(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}