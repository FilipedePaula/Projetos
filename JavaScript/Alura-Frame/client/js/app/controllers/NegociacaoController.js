class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._negociacoesView.update(this._listaNegociacoes);

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

        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0;
        this._data.focus();
    }
}