class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        console.log(this._listaNegociacoes.negociacoes);

        this._limpaForm();
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }

    _limpaForm() {

        this._data = '';
        this._quantidade = 1;
        this._valor = 0;

        $('#data').focus();
    }
}