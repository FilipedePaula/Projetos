var btnRegex = document.querySelector(".btn-regex");

btnRegex.addEventListener("click", function (event) {
    event.preventDefault();

    clearResults();

    var values = getValues();

    var results = executeRegex(values);

    showResults(results);

    highlights(results, values.target);
});

function escapeHtml(string) {
    return string.replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function highlightOff(text) {
    var highlight = document.querySelector("#highlightText");
    highlight.classList.remove('fundo-azul');
    return text;
}

function highlightOn(text) {
    var highlight = document.querySelector("#highlightText");
    highlight.classList.add('fundo-azul');
    return text;
}

function highlights(results, text) {
    var item = null;
    var indexBegin = 0;
    var content = "";

    while ((item = results.shift()) != null) {
        content += highlightOff(escapeHtml(text.substring(indexBegin, item.index)));
        content += highlightOn(escapeHtml(text.substring(item.index, item.lastIndex)));
        indexBegin = item.lastIndex;
    }

    if ((text.length - indexBegin) > 0) {
        content += highlightOff(escapeHtml(text.substring(indexBegin, text.length)));
    }

    document.querySelector('#highlightText').innerHTML = content;
}

function showResults(results) {
    var resultOut = document.querySelector('#result');
    var labelResult = document.querySelector('#labelResults');

    labelResults.innerHTML = (results.length) + " Matchs (results)";

    var resultsArray = results.map(function (item) {
        return item.result;
    });

    labelResult.innerHTML = (resultsArray.length) + " Matchs (results)";

    if (resultsArray.length > 0) {
        resultOut.value = resultsArray.join(' || ');
        resultOut.classList.add('resultPositive');
    } else {
        resultOut.placeholder = 'No matchs (results)';
        resultOut.value = '';
        resultOut.classList.add('resultNegative');
    }
}

function getValues() {
    var inputTarget = document.querySelector("#target");
    var inputPattern = document.querySelector("#pattern");

    var checkboxIndex = document.querySelector("#showIndex");
    var checkboxGroup = document.querySelector("#showGroup");

    console.log('Target: ' + inputTarget.value);
    console.log('Pattern: ' + inputPattern.value.trim());

    return {
        'target': inputTarget.value.trim(),
        'pattern': inputPattern.value,
        'showIndex': checkboxIndex.checked,
        'showGroup': checkboxGroup.checked
    };

}

function executeRegex(values) {

    var pattern = values.pattern;
    var target = values.target;
    var showIndex = values.showIndex;
    var showGroup = values.showGroup;

    var results = [];
    var result = null;

    var regex = new RegExp(pattern, 'g');

    while (result = regex.exec(target)) {

        if (result[0] === "") {
            throw Error("RegEx is null");
        }

        console.log("Resultado: " + result[0]);

        results.push(generateResult(showGroup ? result.join(' | ') : result[0], result.index, regex.lastIndex, showIndex));

    }

    return results;
}

function generateResult(result, index, lastIndex, showIndex) {

    var indexText = showIndex ? " [" + index + "-" + lastIndex + "]" : "";

    return {
        'result': result + indexText,
        'index': index,
        'lastIndex': lastIndex
    };
}

function clearResults() {
    document.querySelector('#labelResults').innerHTML = '0 Matchs (results)';
    document.querySelector('#result').value = '';
    document.querySelector('#result').placeholder = 'No result';
    document.querySelector("#highlightText").innerHTML = 'No result';
}