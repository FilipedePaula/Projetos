class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');

    }

    adiciona(event) {
        event.preventDefault();

        let data = DateHelper.textoParaData(this._data.value);

        let negociacao = new Negociacao(
            data,
            this._quantidade.value,
            this._valor.value
        );

        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));

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