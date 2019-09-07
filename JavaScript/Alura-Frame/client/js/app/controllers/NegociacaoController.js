class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');

    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(...
            this._data.value.split('-')
            .map(function (item, indice) {
                return item - indice % 2;
            })
        );

        console.log(data);

        let dataFormatada = data.getDate() + '/' +
            (data.getMonth() + 1) + '/' + data.getFullYear();

        console.log(dataFormatada);

        let negociacao = new Negociacao(
            data,
            this._quantidade.value,
            this._valor.value
        );

        console.log(negociacao);

        this.reinicia();
    }

    reinicia() {

        let $ = document.querySelector.bind(document);

        $('#data').value = '';
        $('#quantidade').value = 0;
        $('#valor').value = 0;

        $('#data').focus();
    }
}